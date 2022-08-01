import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Container from "../UI/Container";

const About = () => {
  return (
    <Container>
      {/* avatar */}
      <Card></Card>

      {/* title */}
      <h2 className="title">About me</h2>

      {/* info */}
      <p className="mb-10 max-w-[500px] leading-relaxed">
        I am Tran Viet Nam. I graduated from the Hanoi University of Industry in
        2020. I work as an automation engineer in a big corporation. So I can
        collaborate very well with teammates. Besides, I am able to grasp new
        concepts quickly.
      </p>

      {/*  download cv button */}
      <Button shadow>Download my cv</Button>
    </Container>
  );
};

export default About;
