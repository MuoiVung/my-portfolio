import React from "react";
import brand from "../../assets/imgs/brand.png";
import SocialButton from "../UI/SocialButton";
import {
  documentsIcon,
  facebookIcon,
  houseIcon,
  humanIcon,
  instagramIcon,
  linkedlnIcon,
  menuIcon,
  messageIcon,
  suitcaseIcon,
} from "../../assets/icons";

const Sidebar = () => {
  return (
    <>
      {/* sidebar pc */}
      <div className="fixed inset-y-0 left-0 hidden h-screen min-w-[290px] flex-col border-r border-black bg-bg-1 px-10 pt-[50px] pb-10 lg:flex">
        {/* avatar */}
        <img
          src={brand}
          alt="totoro"
          className="mx-auto h-[150px] w-[150px] rounded-full  object-cover"
        />

        {/* navigation */}
        <ul className="mx-auto mt-16 space-y-6">
          {/* home */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 transition-colors duration-300 group-hover:text-primary"
            >
              {houseIcon}
              <span className=" ml-[10px] uppercase">Home</span>
            </a>
          </li>

          {/* about */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 transition-colors duration-300 group-hover:text-primary"
            >
              {humanIcon}
              <span className=" ml-[10px] uppercase">about</span>
            </a>
          </li>

          {/* experience */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 transition-colors duration-300 group-hover:text-primary"
            >
              {documentsIcon}
              <span className=" ml-[10px] uppercase">experience</span>
            </a>
          </li>

          {/* works */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 transition-colors duration-300 group-hover:text-primary"
            >
              {suitcaseIcon}
              <span className=" ml-[10px] uppercase">works</span>
            </a>
          </li>

          {/* contact */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 transition-colors duration-300 group-hover:text-primary"
            >
              {messageIcon}
              <span className=" ml-[10px] uppercase">contact</span>
            </a>
          </li>
        </ul>

        {/* divide */}
        <div className="mt-16 border-t opacity-20"></div>

        <p className="my-8 mx-auto text-sm uppercase tracking-[2px] text-secondary-400">
          Find with me
        </p>

        {/* socials contact */}
        <div className="flex justify-between">
          <SocialButton src="#Home" icon={facebookIcon} />

          <SocialButton src="#Home" icon={instagramIcon} />

          <SocialButton src="#Home" icon={linkedlnIcon} />
        </div>
      </div>

      {/* sidebar mobile */}
      <div className="absolute top-0 z-50 flex w-full items-center justify-between px-[30px] py-[15px] text-white lg:hidden">
        {/* avatar */}
        <img
          src={brand}
          alt="totoro"
          className=" h-[70px] rounded-full object-cover"
        />

        {/* hamburger button */}
        <span id="menuBtn" className="text-[100px] text-primary">
          {menuIcon}
        </span>
      </div>
    </>
  );
};

export default Sidebar;
