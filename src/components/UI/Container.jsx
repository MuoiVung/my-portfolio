import React from "react";

const Container = ({ children, addedClasses }) => {
  return (
    <div
      className={` w-full
     items-center justify-center border-b border-black py-[80px]  px-8 text-secondary-400 lg:px-[60px] ${addedClasses} container mx-auto
    xl:max-w-[1355px]`}
    >
      {children}
    </div>
  );
};

export default Container;
