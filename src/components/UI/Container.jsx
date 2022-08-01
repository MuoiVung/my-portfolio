import React from "react";

const Container = ({ children }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-[80px] px-4 text-secondary-400">
      {children}
    </section>
  );
};

export default Container;
