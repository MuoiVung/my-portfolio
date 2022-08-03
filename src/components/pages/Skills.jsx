import React from "react";
import Container from "../UI/Container";
import html from "../../assets/imgs/skill-html5.svg";
import css from "../../assets/imgs/skill-css.svg";
import js from "../../assets/imgs/skill-js.svg";
import react from "../../assets/imgs/skill-react.svg";
import tailwind from "../../assets/imgs/skill-tailwind.svg";
import redux from "../../assets/imgs/skill-redux.svg";
import SkillItem from "../features/SkillItem";

const Skills = () => {
  return (
    <div id="skills">
      <Container>
        {/* title */}
        <h2 className="title">My Skills</h2>

        {/* skills container */}
        <div className="grid grid-cols-1 justify-items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* skill */}
          <SkillItem name="html" imgSrc={html} imgAlt="html logo" />
          <SkillItem name="css" imgSrc={css} imgAlt="css logo" />
          <SkillItem name="javascript" imgSrc={js} imgAlt="js logo" />
          <SkillItem name="reactjs" imgSrc={react} imgAlt="react logo" />
          <SkillItem name="tailwind" imgSrc={tailwind} imgAlt="tailwind logo" />
          <SkillItem name="redux" imgSrc={redux} imgAlt="redux logo" />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
