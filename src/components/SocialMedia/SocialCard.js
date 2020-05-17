import React from "react";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterestSquare, FaInstagram, FaGlobeEurope } from "react-icons/fa";

const SocialCard = ({
  platformInfo: { account_username, body, identifier, profile_url },
}) => {
  let socialIcon;

  switch (identifier) {
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
        <p className="body">{body.body}</p>
        <a href={profile_url} className="link-to-profile" target="_blank">
          {account_username}
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
