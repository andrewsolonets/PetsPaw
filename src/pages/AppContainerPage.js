import Button from "../Components/UI/Button";
import Menu from "../Components/UI/Menu";
import SideBar from "../Components/UI/SideBar";
import Header from "../Components/UI/Header";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AppContainer = (props) => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHambHandler = (e) => {
    setHamburger((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Header
        // search={userPage}
        // onFav={favouritesPageHandler}
        // userPage={userPage}
        // onLike={likedPageHandler}
        // onDislike={DislikePageHandler}
        // onSearch={searchHandler}
        onSearch={props.search}
      >
        <div className="burgerMenu">
          <SideBar hamburger={hamburger} setHamburger={setHamburger} />
          <Menu hamburger={hamburger} setHamburger={setHamburger}>
            <div onClick={toggleHambHandler}>
              <Cross />
            </div>
            <Button className="menuOption" onClick={toggleHambHandler}>
              <NavLink to="/voting">VOTING</NavLink>
            </Button>
            <Button className="menuOption" onClick={toggleHambHandler}>
              <NavLink to="/breeds">BREEDS</NavLink>
            </Button>
            <Button className="menuOption" onClick={toggleHambHandler}>
              <NavLink to="/gallery">GALLERY</NavLink>
            </Button>
          </Menu>
        </div>
      </Header>
      <div className="appContent">{props.children}</div>
    </div>
  );
};

export default AppContainer;
