# Agent Guide

## Project Context

`nikonikoni blog` is a personal Astro static site and digital garden, not a generic theme.
It uses Astro 5, TypeScript, Svelte, Tailwind CSS, Node.js 24+, and pnpm 10.22.0.

This file contains execution rules only. Use the following as the source of truth:

- `README.md`: local setup and public project overview.
- `docs/ARCHITECTURE.md`: directory ownership and system structure.
- `docs/CONTENT_SYNC.md`: optional external-content workflow.
- `docs/DEPLOYMENT.md`: deployment and environment variables.
- `src/config.ts`: site identity, navigation, feature flags, and services.
- `src/content.config.ts`: content collections and frontmatter requirements.

## Planning And Approval

Before editing, run `git status --short` and identify the smallest affected surface.
Preserve user changes: never reset, revert, stage, or clean changes you did not make.
Leave unrelated changes alone; if overlapping changes cannot be safely separated,
explain the conflict and wait for direction.

Surface material assumptions, ambiguities, and outcome-changing alternatives in the plan;
do not choose among them silently. Follow local patterns for routine details; ask only when
an ambiguity blocks a safe choice.

Direct execution is allowed only for an explicit, local, single-file correction that does not
change public behavior or a data contract, or touch dependencies, lockfiles, configuration, CI,
deployment, content, structured data, personal assets, or delete/move files.

For every other task, present a plan and wait for explicit approval before editing. State the
goal, affected files, useful alternatives, risks, and validation. If the scope materially expands,
the approach changes, or a new external effect appears, stop the affected work and obtain approval again.

Do not create branches or commits, push, create or update pull requests, deploy, change remote
settings, or perform destructive cleanup unless explicitly requested. Adding a dependency or changing
`pnpm-lock.yaml`, CI, deployment configuration, or an environment-variable contract requires a separately
stated item in an approved plan.

## Direct Master Publishing

This is a single-maintainer repository. When the user explicitly asks to sync, commit, upload, or push
local work, use the direct `master` workflow by default:

```powershell
git status
npm.cmd run build
git add .
git commit -m "Describe the change"
git pull --rebase origin master
git push origin master
git status
```

Do not create a feature branch or pull request unless the user explicitly requests one, or direct pushes
to `master` are rejected by repository protection. Run `git status` before `git add .` and preserve any
unrelated changes. The repository ignores only known Obsidian runtime-state files; do not broaden that
ignore rule to `.obsidian/` as a whole.

## Content And Secret Boundaries

Treat `src/content/**`, `src/data/**`, and personal assets in `public/images/**` as user-owned content.
Do not modify, rename, or delete them unless explicitly authorized; follow `src/content.config.ts` and
preserve intentional wording and metadata when content work is approved.

Never commit, print, or copy secret values. Keep `.env` and `post-passwords.local.json` local.
Read them only for an explicitly requested configuration diagnosis; report key names or behavior, never values.

If sensitive data is already committed, immediately alert the user with the affected path and risk; do not repeat the value, rotate credentials, or rewrite Git history without explicit authorization.

## Content Sync Safety

`scripts/sync-content.js` is disabled by default and runs only when `ENABLE_CONTENT_SYNC=true`. When
enabled, it can clone or pull an external repository and replace, link, or copy `src/content/posts`,
`src/content/spec`, `src/data`, and `public/images`; treat it as an external, content-mutating operation.

For ordinary local development and verification, run the normal commands without enabling content sync:

```powershell
pnpm build
```

```sh
pnpm build
```

Enable external content sync only as an approved task requirement by setting
`ENABLE_CONTENT_SYNC=true` before `pnpm dev`, `pnpm check`, `pnpm build`, or commands that may run lifecycle
scripts. A successful `pnpm dev` or `pnpm build` does not prove synchronization succeeded: `predev` and
`prebuild` allow sync failures with `|| true`.

## Editing Discipline

Make the smallest change that satisfies the task. Keep routes in `src/pages/`, reusable UI in
`src/components/`, shared behavior in `src/utils/`, site-wide styles in `src/styles/`, and structured
page data in `src/data/`. Prefer `src/config.ts` for site settings.

Prefer the simplest implementation. Do not add unrequested features, configuration, single-use
abstractions, or speculative error handling. Match established local style. Remove imports, variables,
or functions made unused by your own change, but report rather than alter pre-existing dead code.
Every changed line must trace directly to the approved task.

Do not perform unrelated refactors or repository-wide style cleanup. `pnpm format` and `pnpm lint` both
write across `src/`; never use them as read-only checks or let them create a repository-wide diff. If
formatting is needed, scope it to touched files and review the resulting diff.

When code changes public behavior, a configuration contract, content structure, or deployment workflow,
update the relevant existing README or document in the same approved task. Do not duplicate architecture or
operational detail here.

## Goal-Driven Execution

Define observable success criteria before implementation. In a multi-step plan, pair each step with its
validation. For a bug fix, use matching existing test infrastructure to add or adjust a regression test that
fails before the fix and passes after it; otherwise record a reproducible behavioral check. For a refactor,
verify relevant behavior before and after. Do not add a test framework solely to satisfy this rule.

## Verification

Run `git diff --check` for every change and inspect `git status --short` before hand-off.

- Documentation only: verify changed relative Markdown links resolve locally, then run `git diff --check`.
- Content or structured data: build with content sync explicitly disabled.
- Source code: run a non-writing targeted check such as `pnpm exec biome ci <touched-paths>`, then build
  with content sync disabled.
- Visible UI: also inspect one desktop and one mobile viewport in a browser. Check the console, layout,
  text overflow, overlap, and changed interactions; retain screenshots or record the observed result.

Full static checks have known baseline failures. Treat `pnpm check`, `pnpm type-check`, and full-repository
Biome output as diagnostics; a nonzero exit code alone neither proves a regression nor permits claiming
success. Capture relevant diagnostics before editing; do not add diagnostics in files you touch, and report
inherited failures separately. Code, content, and data tasks still require a successful content-sync-disabled
build unless an existing build failure blocks it and is reported with evidence.

## Hand-off

Report changed files, affected behavior or content, commands actually run and their results, inherited
static-check failures, and verification gaps. Do not claim a check passed when it was skipped, advisory,
or masked by a package script.
