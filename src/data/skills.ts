// 技能页当前未启用。这里只保留数据结构，避免把上游示例经历误认为个人资料。

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[];
	certifications?: string[];
	color?: string;
}

export const skillsData: Skill[] = [];

export const getSkillStats = () => ({
	total: skillsData.length,
	byLevel: {
		beginner: skillsData.filter((skill) => skill.level === "beginner").length,
		intermediate: skillsData.filter((skill) => skill.level === "intermediate")
			.length,
		advanced: skillsData.filter((skill) => skill.level === "advanced").length,
		expert: skillsData.filter((skill) => skill.level === "expert").length,
	},
	byCategory: {
		frontend: skillsData.filter((skill) => skill.category === "frontend")
			.length,
		backend: skillsData.filter((skill) => skill.category === "backend").length,
		database: skillsData.filter((skill) => skill.category === "database")
			.length,
		tools: skillsData.filter((skill) => skill.category === "tools").length,
		other: skillsData.filter((skill) => skill.category === "other").length,
	},
});

export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") return skillsData;
	return skillsData.filter((skill) => skill.category === category);
};

export const getAdvancedSkills = () =>
	skillsData.filter(
		(skill) => skill.level === "advanced" || skill.level === "expert",
	);

export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce(
		(total, skill) =>
			total + skill.experience.years * 12 + skill.experience.months,
		0,
	);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
