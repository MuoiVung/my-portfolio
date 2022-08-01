import React from "react";

const SocialButton = ({ src, icon }) => {
  return (
    <a href={src} className="btn-social">
      {icon}
    </a>
  );
};

export default SocialButton;
