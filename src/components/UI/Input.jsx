import React from "react";

const inputStyle =
  "font-md min-h-[52px] rounded-md border border-black-600 bg-black-600 px-4 shadow-inner outline-none duration-300 focus:border-primary";

const textAreaStyle =
  "font-md min-h-[52px] rounded-md border border-black-600 bg-black-600 px-4 shadow-inner outline-none duration-300 focus:border-primary py-4 resize-none";

const Input = ({ label, type, textArea }) => {
  console.log(textArea);
  const inputField = (
    <input type={type} className={inputStyle} name={label} id={label} />
  );

  const textAreaField = (
    <textarea
      name={label}
      id={label}
      cols="30"
      rows="10"
      className={textAreaStyle}
    ></textarea>
  );

  const content = textArea ? textAreaField : inputField;

  return (
    <div className="flex flex-1 flex-col space-y-4">
      {/* label */}
      <label
        htmlFor="name"
        className="text-sm font-medium uppercase tracking-widest text-light-gray"
      >
        {label}
      </label>

      {/* input */}
      {content}
    </div>
  );
};

export default Input;
