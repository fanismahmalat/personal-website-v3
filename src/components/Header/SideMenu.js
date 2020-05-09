import React from "react";
import NavLinks from "./NavLinks";

const SideMenu = ({ isSideMenuOpen, setSideMenuOpen }) => {
  const SideMenuStatus = isSideMenuOpen ? "hide-SideMenu" : "show-SideMenu";
  const overlayStatus = isSideMenuOpen ? "show-overlay" : "";

  const handleClick = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <div className={`SideMenu ${SideMenuStatus}`}>
        <NavLinks isSideMenuOpen={isSideMenuOpen} />
      </div>
      <div
        className={`SideMenu-overlay ${overlayStatus}`}
        onClick={handleClick}
      ></div>
    </>
  );
};

export default SideMenu;
