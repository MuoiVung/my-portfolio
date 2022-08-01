import React from "react";

const defaultCSS =
  "z-10 rounded-md bg-bg-2 px-[35px] py-[18px] text-sm uppercase text-primary duration-300 hover:-translate-y-[5px] hover:bg-bg-3";

const Button = ({ children, shadow }) => {
  return (
    <button className={shadow ? `${defaultCSS} shadow-1` : defaultCSS}>
      {children}
    </button>
  );
};

export default Button;
// translate-y-[5px]
