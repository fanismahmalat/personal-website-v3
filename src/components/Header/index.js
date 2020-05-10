import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";

import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const { siteLogoDark } = useSiteMetadata();

  useEffect(() => {
    const header = document.getElementById("nav");
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const handleClick = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header id="header" data-sal="slide-up" data-sal-delay="150">
      <nav id="nav">
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src={siteLogoDark} alt="Fanis Mahmalat Logo" />
          </Link>
          <NavLinks />
          <div className="sidebar-icon">
            <MdMenu onClick={handleClick} />
          </div>
        </div>
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Header;
