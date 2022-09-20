import Menu from "../../Components/UI/Menu";
import SideBar from "../../Components/UI/SideBar";
import Header from "../../Components/Header/Header";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useState } from "react";

import {
  AppContainerWrapper,
  BurgerMenu,
  BurgerOptionsWrapper,
} from "./AppContainerPage.styles";
import { BurgerCrossButton } from "../../Components/Button/Button.styles";
import { PageTabs } from "../../Components/PageTabs/PageTabs";

const AppContainer = (props) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHambHandler = (e) => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <AppContainerWrapper>
      <Header onSearch={props.search}>
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
      <div>{props.children}</div>
    </AppContainerWrapper>
  );
};

export default AppContainer;
