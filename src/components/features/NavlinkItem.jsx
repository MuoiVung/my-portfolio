import React from "react";

const defaultStyle =
  "flex font-secondary text-secondary-300 transition-colors duration-300 hover:text-primary";
const activeStyle =
  "flex font-secondary text-primary transition-colors duration-300 hover:text-primary";

const NavLinkItem = ({ src, icon, name, activeNavLink, onClickNavLink }) => {
  const srcData = src.toLowerCase();

  return (
    <li className="group">
      <a
        href={src}
        className={activeNavLink === srcData ? activeStyle : defaultStyle}
        data-src={srcData}
        onClick={onClickNavLink}
      >
        {icon}
        <span className="ml-[10px] uppercase">{name}</span>
      </a>
    </li>
  );
};

export default NavLinkItem;
