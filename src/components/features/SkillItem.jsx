import React from "react";

const SkillItem = ({ imgSrc, imgAlt, name }) => {
  return (
    <div className="group  flex  flex-col items-center rounded-lg bg-bg-2  opacity-80 shadow-1 transition-all duration-300 hover:bg-bg-3 hover:opacity-100">
      {/* skill image */}
      <div className=" mx-auto w-full border-b border-black-500 p-8">
        <img src={imgSrc} alt={imgAlt} className="mx-auto h-[90px] " />
      </div>

      {/* skill name */}
      <p className="p-4 text-lg uppercase text-secondary-500 transition duration-300 group-hover:text-primary">
        {name}
      </p>
    </div>
  );
};

export default SkillItem;
