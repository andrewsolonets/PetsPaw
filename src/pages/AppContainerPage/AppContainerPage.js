import Button from "../../Components/UI/Button";
import Menu from "../../Components/UI/Menu";
import SideBar from "../../Components/UI/SideBar";
import Header from "../../Components/UI/Header";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContainerWrapper, BurgerMenu } from "./AppContainerPage.styles";
import { BurgerCrossButton } from "../../Components/UI/Button.styles";

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
            <Button onClick={toggleHambHandler}>
              <NavLink to="/voting">VOTING</NavLink>
            </Button>
            <Button onClick={toggleHambHandler}>
              <NavLink to="/breeds">BREEDS</NavLink>
            </Button>
            <Button onClick={toggleHambHandler}>
              <NavLink to="/gallery">GALLERY</NavLink>
            </Button>
          </Menu>
        </BurgerMenu>
      </Header>
      <div>{props.children}</div>
    </AppContainerWrapper>
  );
};

export default AppContainer;
