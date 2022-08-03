import React from "react";
import { NavLink } from "react-router-dom";

const defaultStyle =
  "flex font-secondary text-secondary-300 transition-colors duration-300 hover:text-primary";
const activeStyle =
  "flex font-secondary text-primary transition-colors duration-300 hover:text-primary";

const NavLinkItem = ({ src, icon, name }) => {
  return (
    <li className="group">
      <NavLink
        to={src}
        className={(isActive) => (isActive ? activeStyle : defaultStyle)}
      >
        {icon}
        <span className="ml-[10px] uppercase">{name}</span>
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
