// SkillsButton.jsx
import React from "react";
import { skills } from "./skills";

const SkillsDetailsList = () => {
    // Function to group skills by category
    const groupByCategory = (skillsArray) => {
        return skillsArray.reduce((acc, skill) => {
            const { category } = skill;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(skill);
            return acc;
        }, {});
    };

    // Grouped skills by category
    const groupedSkills = groupByCategory(skills);

    return (
        <div className="flex flex-wrap gap-16  z-50">
            {Object.keys(groupedSkills).map((category) => (
                <div className="flex min-w-fit flex-col gap-4" key={category}>
                    <h2 className="font-bold text-3xl text-secondary-light">
                        {category}
                    </h2>
                    <div className="flex flex-col">
                        {groupedSkills[category].map((skill, index) => (
                            <div key={index} className="flex flex-col">
                                <details className="max-w-xs">
                                    <summary className="underline max-w-[218px] md:max-w-[232px] italic font-semibold underline-offset-4">
                                        {skill.name}
                                    </summary>
                                    <p className=" text-xs">{skill.info}</p>
                                </details>
                                <p className="text-secondary-light50op text-xs italic">
                                    {skill.subCategory}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsDetailsList;
