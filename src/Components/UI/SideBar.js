import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <button
      className="burger"
      onClick={() => props.setHamburger(!props.hamburger)}
    >
      <div className="burgerI" />
      <div className="burgerI" />
      <div className="burgerI" />
    </button>
  );
};

export default SideBar;
