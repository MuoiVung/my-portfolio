import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Container from "../UI/Container";
import avatar from "../../assets/imgs/personal-avatar.jpg";

const About = () => {
  return (
    <div id="about">
      <Container>
        <div className="flex flex-col items-center xl:flex-row xl:space-x-10">
          {/* avatar */}
          <Card addedClasses="mb-10 p-4">
            <img
              src={avatar}
              alt="personal avatar"
              className="h-auto  max-w-full rounded-lg object-cover md:max-w-[450px] md:flex-1"
            />
          </Card>

          {/* info container */}
          <div className="flex flex-col items-center xl:items-start">
            {/* title */}
            <h2 className="title">About me</h2>

            {/* info */}
            <p className="mb-10 text-center leading-relaxed xl:text-left">
              I am Tran Viet Nam. I graduated from the Hanoi University of
              Industry in 2020. I work as an automation engineer in a big
              corporation. So I can collaborate very well with teammates.
              Besides, I am able to grasp new concepts quickly.
            </p>

            {/*  download cv button */}
            <Button shadow>Download my cv</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
