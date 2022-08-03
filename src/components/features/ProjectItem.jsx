import React from "react";
import Card from "../UI/Card";

const ProjectItem = ({ name, imageSrc, imageAlt, type }) => {
  return (
    <button className=" group rounded-[20px] text-left opacity-80 duration-500 hover:bg-bg-3 hover:opacity-100">
      <Card addedClasses="flex flex-col gap-4 ">
        {/* project image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto rounded-lg duration-500 group-hover:scale-110"
          />
        </div>

        {/* application type */}
        <p className="text-sm uppercase tracking-wide text-primary">{type}</p>

        {/* project name */}
        <p className="min-h-[64px] font-secondary text-lg  font-semibold text-secondary-400 sm:text-2xl">
          {name}
        </p>
      </Card>
    </button>
  );
};

export default ProjectItem;
