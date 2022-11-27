import Menu from "../UI/Menu";
import SideBar from "../UI/SideBar";
import Header from "../Header/Header";
import { FC } from "react";
import Cross from "../../assets/cross.svg";
import { useState } from "react";

import {
  AppContainerWrapper,
  BurgerMenu,
  BurgerOptionsWrapper,
} from "./AppContainerPage.styles";
import { BurgerCrossButton } from "../Button/Button.styles";
import { PageTabs } from "../PageTabs/PageTabs";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
  search: boolean;
}

const AppContainer = ({ children, search }: LayoutProps) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHambHandler = (e) => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <AppContainerWrapper>
      <Header onSearch={search}>
        <BurgerMenu>
          <SideBar hamburger={hamburger} setHamburger={setHamburger} />
          <Menu hamburger={hamburger} setHamburger={setHamburger}>
            <BurgerCrossButton onClick={toggleHambHandler}>
              <Cross />
            </BurgerCrossButton>
            <BurgerOptionsWrapper>
              <PageTabs toggleHambHandler={toggleHambHandler} mobile={true} />
            </BurgerOptionsWrapper>
          </Menu>
        </BurgerMenu>
      </Header>
      <div>{children}</div>
    </AppContainerWrapper>
  );
};

export default AppContainer;
