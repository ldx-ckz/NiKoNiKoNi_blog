const ALLOWED_ORIGIN = "https://miku.nikonikoni.blog";

const corsHeaders = {
	"Access-Control-Allow-Origin": ALLOWED_ORIGIN,
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			...corsHeaders,
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-store",
		},
	});
}

function normalizePostPath(value) {
	if (typeof value !== "string" || !value) return null;

	try {
		const pathname = new URL(value, "https://counter.invalid").pathname;
		const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
		return normalized.startsWith("/posts/") ? normalized : null;
	} catch {
		return null;
	}
}

const incrementSql = `
	INSERT INTO counters (name, value, updated_at)
	VALUES (?, 1, CURRENT_TIMESTAMP)
	ON CONFLICT(name) DO UPDATE SET
		value = value + 1,
		updated_at = CURRENT_TIMESTAMP
`;

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const origin = request.headers.get("Origin");

		if (request.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		if (url.pathname === "/api/view" && request.method === "POST") {
			if (origin !== ALLOWED_ORIGIN) {
				return json({ error: "Forbidden" }, 403);
			}

			let body = {};
			try {
				body = await request.json();
			} catch {}
			const postPath = normalizePostPath(body.path);

			const statements = [env.DB.prepare(incrementSql).bind("pageviews")];
			if (postPath) {
				statements.push(
					env.DB.prepare(incrementSql).bind(`pageviews:${postPath}`),
				);
			}
			await env.DB.batch(statements);

			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		if (url.pathname === "/api/count" && request.method === "GET") {
			const hasPath = url.searchParams.has("path");
			const postPath = normalizePostPath(url.searchParams.get("path"));
			if (hasPath && !postPath) {
				return json({ error: "Invalid post path" }, 400);
			}

			const counterName = postPath ? `pageviews:${postPath}` : "pageviews";
			const row = await env.DB.prepare(
				"SELECT value FROM counters WHERE name = ?",
			)
				.bind(counterName)
				.first();

			return json({
				count: Number(row?.value || 0),
				...(postPath ? { path: postPath } : {}),
			});
		}

		return json({ error: "Not found" }, 404);
	},
};
