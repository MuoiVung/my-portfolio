import React from "react";

const Card = ({ children, addedClasses }) => {
  return (
    <article className={` rounded-[20px] p-4 shadow-1 sm:p-8 ${addedClasses}`}>
      {children}
    </article>
  );
};

export default Card;
