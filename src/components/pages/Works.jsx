import React from "react";
import Container from "../UI/Container";
import work1 from "../../assets/imgs/work-1.jpg";
import work2 from "../../assets/imgs/work-2.jpg";
import work3 from "../../assets/imgs/work-3.jpg";
import ProjectItem from "../features/ProjectItem";

const Works = () => {
  return (
    <div id="works">
      <Container>
        {/* title */}
        <h2 className="title">My Projects</h2>

        {/* projects container */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* project 1*/}
          <ProjectItem
            name="Vietnamese for everyone"
            imageSrc={work1}
            imageAlt="learning Vietnamese application"
            type="Elearning"
          />

          {/* project 2*/}
          <ProjectItem
            name="The coffee shop"
            imageSrc={work2}
            imageAlt="Drink original coffee at here"
            type="Ecommerce"
          />

          {/* project 3*/}
          <ProjectItem
            name="Super fast burger "
            imageSrc={work3}
            imageAlt="Order burgers super fast"
            type="Ecommerce"
          />
        </section>
      </Container>
    </div>
  );
};

export default Works;
