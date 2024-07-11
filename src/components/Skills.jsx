import React from "react";

const Skills = ({ skill, color = "bg-white", text = "black" }) => {
  return (
    <div className="mt-1 text-sm md:text-md">
      <span
        className={`${color} p-1 rounded-md text-${text}  text-sm cursor-pointer font-bold    `}
      >
        {skill}
      </span>
    </div>
  );
};

export default Skills;
