import React, { useState } from "react";

import "./App.css";

import Button from "./Components/UI/Button";
import VoteTable from "./assets/vote-table.png";
import PetBreed from "./assets/pet-breeds.png";
import Gallery from "./assets/Gallery.png";
import HomePic from "./Components/UI/HomePic";

import { ReactComponent as Logo1 } from "./assets/logo2.svg";
import { ReactComponent as TextLogo } from "./assets/PetsPaw.svg";

import GalleryPage from "./pages/GalleryPage";

import BreedsPage from "./pages/BreedsPage";
import VotingApp from "./pages/VotingApp";
import FavouritesPage from "./Components/FavouritesPage";
import LikedPage from "./Components/LikedPage";
import SearchPage from "./Components/SearchPage";

import { NavLink, Route, Routes } from "react-router-dom";
import AppContainer from "./pages/AppContainerPage";
import SingleCat from "./pages/SingleCat";

let subId = Math.random().toString(36).substring(7);
function App() {
  const [theme, setTheme] = useState("light");
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(false);

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

  const catHandler = ({ results, breed }) => {
    console.log(results);
    setResults(results);
    setBreed(breed);
  };

  const searchClickHandler = ({ results, breed }) => {
    console.log(results);
    setResults([results]);
    setBreed(breed);
  };

  return (
    <React.Fragment>
      <div className="main">
        <div className="parent">
          {/* <img className="logo" src={logo} alt="Logo"></img> */}
          <div className="logo">
            <Logo1></Logo1>
            <TextLogo className="logotext"></TextLogo>
          </div>
          <label className="switch">
            <input type="checkbox" onClick={toggleThemeHandler}></input>
            <span className="slider round"></span>
          </label>
          <section>
            <div className="greetings">
              <h1>Hi intern!</h1>
              <p>Welcome to MI 2022 Front-end test</p>
            </div>

            <div className="options-container">
              <p>Lets start using The Cat API</p>
              <div className="options">
                <NavLink
                  className={(state) =>
                    `${"option-button"} ${state.isActive ? "active" : ""}`
                  }
                  to="/voting"
                >
                  <div className="voting-container">
                    <img src={VoteTable} alt="VoteTable"></img>
                  </div>
                  <Button>VOTING</Button>
                </NavLink>
                <NavLink
                  className={(state) =>
                    `${"option-button"} ${state.isActive ? "active" : ""}`
                  }
                  to="/breeds"
                >
                  <div className="breed-container">
                    <img src={PetBreed} alt="PetBreed"></img>
                  </div>
                  <Button>BREEDS</Button>
                </NavLink>
                <NavLink
                  className={(state) =>
                    `${"option-button"} ${state.isActive ? "active" : ""}`
                  }
                  to="/gallery"
                >
                  <div className="gallery-container">
                    <img src={Gallery} alt="Gallery"></img>
                  </div>
                  <Button>GALLERY</Button>
                </NavLink>
              </div>
            </div>
          </section>
        </div>

        {/* {contentApp} */}
        <Routes>
          <Route path="/" element={<HomePic />} />
          <Route
            path="/voting"
            element={
              <AppContainer>
                <VotingApp subId={subId} />
              </AppContainer>
            }
          />
          <Route
            path="/breeds"
            element={
              <AppContainer>
                <BreedsPage oneCat={catHandler}></BreedsPage>
              </AppContainer>
            }
          />
          <Route
            path="/breeds/:cat/:id"
            exact="true"
            element={
              <AppContainer>
                <SingleCat items={results} breed={breed} />
              </AppContainer>
            }
          />
          <Route
            path="/gallery"
            element={
              <AppContainer>
                <GalleryPage subId={subId}></GalleryPage>
              </AppContainer>
            }
          />
          <Route
            path="/search/:searchItem"
            element={
              <AppContainer search={true}>
                <SearchPage onClick={searchClickHandler} text={"SEARCH"} />
              </AppContainer>
            }
          />
          <Route
            path="/liked"
            element={
              <AppContainer>
                <LikedPage value={1} text={"LIKES"} />
              </AppContainer>
            }
          />
          <Route
            path="/disliked"
            element={
              <AppContainer>
                <LikedPage value={0} text={"DISLIKES"} />
              </AppContainer>
            }
          />
          <Route
            path="/favourites"
            element={
              <AppContainer>
                <FavouritesPage />
              </AppContainer>
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
