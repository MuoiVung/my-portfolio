import React from "react";

const defaultCSS =
  "z-10 rounded-md bg-bg-2 px-[35px] py-[18px] text-sm uppercase text-primary duration-300 hover:-translate-y-[5px] hover:bg-bg-3";

const Button = ({ children, shadow, addedClasses, type, to }) => {
  return (
    <>
      {!type && (
        <button
          className={
            shadow ? `${defaultCSS} shadow-1 ${addedClasses}` : defaultCSS
          }
        >
          {children}
        </button>
      )}
      {type === "a" && (
        <a
          href={to}
          className={
            shadow ? `${defaultCSS} shadow-1 ${addedClasses}` : defaultCSS
          }
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Button;
// translate-y-[5px]
