import React from "react";
import Button from "../UI/Button";
import SnowParticles from "../UI/SnowParticles";

const Home = () => {
  return (
    <section id="home" className="relative h-screen w-auto">
      {/* snow particles background */}
      <SnowParticles />

      {/* content container */}
      <div className="absolute inset-0 z-10 bg-black/20">
        {/* content */}
        <div className="flex h-full flex-col items-center justify-center space-y-6">
          {/* title */}
          <h1 className="font-secondary text-6xl font-bold uppercase text-white md:text-[80px] xl:text-[120px]">
            Viet Nam
          </h1>

          {/* major */}
          <p className="mt-[10px] text-[30px] text-secondary-400  md:font-light">
            I am a <span className="font-light text-primary">Developer.</span>
          </p>

          {/* contact button */}
          <Button type="a" to="#contact">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
