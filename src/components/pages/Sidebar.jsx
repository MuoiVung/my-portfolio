import React, { useEffect, useState } from "react";
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
import NavLinkItem from "../features/NavlinkItem";

const Sidebar = () => {
  const [activeNavLink, setActiveNavLink] = useState("");

  useEffect(() => {
    setActiveNavLink(document.location.hash.toLowerCase());
  }, []);

  const clickNavLinkHandler = (event) => {
    const newActiveLink = event.currentTarget.dataset.src;
    setActiveNavLink(newActiveLink);
  };

  return (
    <>
      {/* sidebar pc */}
      <aside className="fixed inset-y-0 left-0 hidden h-screen min-w-[290px] flex-col border-r border-black bg-bg-1 px-10 pt-[50px] pb-10 lg:flex">
        {/* avatar */}
        <img
          src={brand}
          alt="totoro"
          className="mx-auto h-[150px] w-[150px] rounded-full  object-cover"
        />

        {/* navigation */}
        <ul className="mx-auto mt-16 space-y-6">
          {/* home */}
          <NavLinkItem
            src="#home"
            icon={houseIcon}
            name="home"
            activeNavLink={activeNavLink}
            onClickNavLink={clickNavLinkHandler}
          />

          {/* about */}
          <NavLinkItem
            src="#about"
            icon={humanIcon}
            name="about"
            activeNavLink={activeNavLink}
            onClickNavLink={clickNavLinkHandler}
          />

          {/* works */}
          <NavLinkItem
            src="#works"
            icon={suitcaseIcon}
            name="works"
            activeNavLink={activeNavLink}
            onClickNavLink={clickNavLinkHandler}
          />

          {/* skills */}
          <NavLinkItem
            src="#skills"
            icon={documentsIcon}
            name="skills"
            activeNavLink={activeNavLink}
            onClickNavLink={clickNavLinkHandler}
          />

          {/* contact */}
          <NavLinkItem
            src="#contact"
            icon={messageIcon}
            name="contact"
            activeNavLink={activeNavLink}
            onClickNavLink={clickNavLinkHandler}
          />
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
      </aside>

      {/* sidebar mobile */}
      <aside className="absolute top-0 z-50 flex w-full items-center justify-between px-[30px] py-[15px] text-white lg:hidden">
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
      </aside>
    </>
  );
};

export default Sidebar;
