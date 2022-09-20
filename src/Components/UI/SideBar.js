import React from "react";
import { BurgerLine } from "../styles/MobileMenu.styles";
import { BurgerMenuButton } from "../Button/Button.styles";

const SideBar = (props) => {
  return (
    <BurgerMenuButton onClick={() => props.setHamburger(!props.hamburger)}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerMenuButton>
  );
};

export default SideBar;
