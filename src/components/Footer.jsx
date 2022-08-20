import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const iconStyling = `text-2xl`;

  return (
    <div className="flex flow-root m-4">
      <div className="flex flex-row gap-4 m-4 float-left">
        <a
          href="https://github.com/AmanBhanse"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyling}`}
        >
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/aman-bhanse/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyling}`}
        >
          <div>
            <BsLinkedin />
          </div>
        </a>
        <a
          href="https://twitter.com/bhanse_aman"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyling}`}
        >
          <div>
            <BsTwitter />
          </div>
        </a>
      </div>
      <div className="float-right m-4 font-semibold text-lg text-right">
        ALL RIGHTS RESERVED @2022
        <br />
        Aman Bhanse
      </div>
    </div>
  );
};

export default Footer;
