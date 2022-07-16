import React, { useState } from "react";

import "./App.css";

import Button from "./Components/UI/Button";
import VoteTable from "./assets/vote-table.png";
import PetBreed from "./assets/pet-breeds.png";
import Gallery from "./assets/Gallery.png";
import logo from "./assets/Logo.png";
import HomePic from "./Components/UI/HomePic";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { ReactComponent as Logo1 } from "./assets/logo2.svg";
import { ReactComponent as TextLogo } from "./assets/PetsPaw.svg";
import Header from "./Components/UI/Header";

import GalleryPage from "./Components/GalleryPage";
import SideBar from "./Components/UI/SideBar";

import BreedsPage from "./Components/BreedsPage";
import VotingApp from "./Components/VotingApp";
import FavouritesPage from "./Components/FavouritesPage";
import LikedPage from "./Components/LikedPage";
import SearchPage from "./Components/SearchPage";
import Menu from "./Components/UI/Menu";

let subId = Math.random().toString(36).substring(7);
function App() {
  const [curPage, setCurPage] = useState("");
  const [userPage, setUserPage] = useState("");
  const [content, setContent] = useState();
  const [hamburger, setHamburger] = useState(false);
  const [theme, setTheme] = useState("light");
  const onVoteHandler = () => {
    setHamburger(false);
    setCurPage("vote");
    setUserPage("");
    setContent(<VotingApp subId={subId} />);
  };

  const backButtonHandler = () => {
    console.log("Hello");
  };

  const onBreedsHandler = () => {
    setHamburger(false);
    setCurPage("breeds");
    setUserPage("");
    setContent(<BreedsPage></BreedsPage>);
    console.log("Breed");
  };

  const onGalleryHandler = () => {
    setHamburger(false);
    setCurPage("gallery");
    setUserPage("");

    setContent(<GalleryPage subId={subId}></GalleryPage>);
  };
  const favouritesPageHandler = () => {
    setUserPage("fav");

    setContent(<FavouritesPage />);
  };

  const likedPageHandler = () => {
    setUserPage("liked");

    setContent(
      <LikedPage value={1} text={"LIKES"} onBack={backButtonHandler} />
    );
  };

  const DislikePageHandler = () => {
    setUserPage("disliked");

    setContent(
      <LikedPage value={0} text={"DISLIKES"} onBack={backButtonHandler} />
    );
  };

  const searchHandler = (query) => {
    setUserPage("search");

    setContent(<SearchPage query={query} text={"SEARCH"} />);
  };
  const toggleHambHandler = (e) => {
    setHamburger((prevState) => !prevState);
  };

  const toggleThemeHandler = () => {
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--background",
        "var(--darkBg)"
      );
      document.documentElement.style.setProperty("--textBlack", "var(--white)");
      document.documentElement.style.setProperty(
        "--backgroundBlock",
        "var(--dark)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock2",
        "var(--dark2)"
      );
      document.documentElement.style.setProperty(
        "--btnColor",
        "var(--btnColorDark)"
      );
      setTheme("dark");
    }
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--background",
        "var(--whiteBg)"
      );
      document.documentElement.style.setProperty(
        "--textBlack",
        "var(--darkBg)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock",
        "var(--white)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock2",
        "var(--whiteBg)"
      );
      document.documentElement.style.setProperty(
        "--btnColor",
        "var(--btnColorLight)"
      );
      setTheme("light");
    }
  };

  let contentApp;

  if (curPage) {
    contentApp = (
      <div className="app">
        <Header
          search={userPage}
          onFav={favouritesPageHandler}
          userPage={userPage}
          onLike={likedPageHandler}
          onDislike={DislikePageHandler}
          onSearch={searchHandler}
        >
          <div className="burgerMenu">
            {" "}
            <SideBar hamburger={hamburger} setHamburger={setHamburger} />
            <Menu hamburger={hamburger} setHamburger={setHamburger}>
              <div onClick={toggleHambHandler}>
                <Cross />
              </div>
              <Button className="menuOption" onClick={onVoteHandler}>
                VOTING
              </Button>
              <Button className="menuOption" onClick={onBreedsHandler}>
                BREEDS
              </Button>
              <Button className="menuOption" onClick={onGalleryHandler}>
                GALLERY
              </Button>
            </Menu>
          </div>
        </Header>
        <div className="appContent">{content}</div>
      </div>
    );
  } else {
    contentApp = <HomePic />;
  }

  return (
    <React.Fragment>
      <div className="main">
        <div className="parent">
          {/* <img className="logo" src={logo} alt="Logo"></img> */}
          <div className="logo">
            <Logo1></Logo1>
            <TextLogo className="logotext"></TextLogo>
          </div>

          <input type="checkbox" onClick={toggleThemeHandler}></input>
          <section>
            <div className="greetings">
              <h1>Hi intern!</h1>
              <p>Welcome to MI 2022 Front-end test</p>
            </div>

            <div className="options-container">
              <p>Lets start using The Cat API</p>
              <div className="options">
                <div
                  className={`${"option-button"} ${
                    curPage === "vote" ? "active" : ""
                  }`}
                  onClick={onVoteHandler}
                >
                  <div className="voting-container">
                    <img src={VoteTable} alt="VoteTable"></img>
                  </div>
                  <Button>VOTING</Button>
                </div>
                <div
                  className={`${"option-button"} ${
                    curPage === "breeds" ? "active" : ""
                  }`}
                  onClick={onBreedsHandler}
                >
                  <div className="breed-container">
                    <img src={PetBreed} alt="PetBreed"></img>
                  </div>
                  <Button>BREEDS</Button>
                </div>
                <div
                  className={`${"option-button"} ${
                    curPage === "gallery" ? "active" : ""
                  }`}
                  onClick={onGalleryHandler}
                >
                  <div className="gallery-container">
                    <img src={Gallery} alt="Gallery"></img>
                  </div>
                  <Button>GALLERY</Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {contentApp}
      </div>
    </React.Fragment>
  );
}

export default App;
