import React from "react";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterestSquare, FaInstagram, FaGlobeEurope } from "react-icons/fa";

const SocialCard = ({ platform }) => {
  let socialIcon;

  switch (platform) {
    case "instagram":
      socialIcon = <FaInstagram />;
      break;
    case "facebook":
      socialIcon = <AiFillFacebook />;
      break;
    case "linkedin":
      socialIcon = <AiFillLinkedin />;
      break;
    case "twitter":
      socialIcon = <AiOutlineTwitter />;
      break;
    case "pinterest":
      socialIcon = <FaPinterestSquare />;
      break;
    default:
      socialIcon = <FaGlobeEurope />;
      break;
  }

  return (
    <div className="social-card">
      <div className="card-inner">
        <div className="icon">{socialIcon}</div>
        <p className="body">
          Where I share my journey as a Web Developer and post tips and tricks
          about coding.
        </p>
        <a href="#" className="link-to-profile">
          @fanismahmalat
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
