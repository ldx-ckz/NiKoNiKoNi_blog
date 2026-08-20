// 时间线页当前未启用。这里只保留数据结构，避免把上游示例履历误认为个人资料。

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string;
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string;
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [];

export const getTimelineStats = () => ({
	total: timelineData.length,
	byType: {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	},
});

export const getTimelineByType = (type?: string) => {
	const items =
		type && type !== "all"
			? timelineData.filter((item) => item.type === type)
			: timelineData;
	return [...items].sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
	);
};

export const getFeaturedTimeline = () =>
	getTimelineByType().filter((item) => item.featured);

export const getCurrentItems = () =>
	timelineData.filter((item) => !item.endDate);

export const getTotalWorkExperience = () => {
	const totalMonths = timelineData
		.filter((item) => item.type === "work")
		.reduce((total, item) => {
			const startDate = new Date(item.startDate);
			const endDate = item.endDate ? new Date(item.endDate) : new Date();
			return (
				total +
				Math.ceil(
					Math.abs(endDate.getTime() - startDate.getTime()) /
						(1000 * 60 * 60 * 24 * 30),
				)
			);
		}, 0);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
