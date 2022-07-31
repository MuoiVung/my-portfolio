import React from "react";
import lotusAvatar from "../assets/imgs/lotus-logo.png";

const Sidebar = () => {
  return (
    <>
      {/* sidebar pc */}
      <div className="hidden min-w-[290px] pt-[50px] pb-10 px-10 lg:flex flex-col fixed inset-y-0 left-0 border-r border-black">
        {/* personal image */}
        {/* <img
          src={avatar}
          alt="totoro"
          className="w-[192px] h-[192px] rounded-full object-cover shadow-1 border-[5px] border-gray-600"
        /> */}

        <img
          src={lotusAvatar}
          alt="totoro"
          className="w-[150px] h-[150px] rounded-full object-cover shadow-1 border-[5px] border-[#32363b] mx-auto"
        />

        {/* navigation */}
        <ul className="space-y-6 mt-16 mx-auto">
          {/* home */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 group-hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className=" uppercase ml-[10px]">Home</span>
            </a>
          </li>

          {/* about */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 group-hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className=" uppercase ml-[10px]">about</span>
            </a>
          </li>

          {/* experience */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 group-hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span className=" uppercase ml-[10px]">experience</span>
            </a>
          </li>

          {/* works */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 group-hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span className=" uppercase ml-[10px]">works</span>
            </a>
          </li>

          {/* contact */}
          <li className="group">
            <a
              href="#home"
              className="flex font-secondary text-secondary-300 group-hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className=" uppercase ml-[10px]">contact</span>
            </a>
          </li>
        </ul>

        {/* divide */}
        <div className="mt-16 border-t opacity-20"></div>

        <p className="uppercase text-secondary-400 text-sm tracking-[2px] my-8 mx-auto">
          Find with me
        </p>

        {/* socials contact */}
        <div className="flex justify-between">
          <a
            href="#home"
            className="w-[53px] h-[53px] flex justify-center items-center bg-bg-2 shadow-1 text-secondary-400 rounded-lg hover:bg-bg-3
        transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-5 z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          <a
            href="#home"
            className="w-[53px] h-[53px] flex justify-center items-center bg-bg-2 shadow-1 text-secondary-400 rounded-lg hover:bg-bg-3
        transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-5 z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="#home"
            className="w-[53px] h-[53px] flex justify-center items-center bg-bg-2 shadow-1 text-secondary-400 rounded-lg hover:bg-bg-3
        transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-5 z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>

      {/* sidebar mobile */}
      <div className="lg:hidden fixed top-0 left-0"></div>
    </>
  );
};

export default Sidebar;
