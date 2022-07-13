import React, { useState } from "react";

import "./App.css";

import Button from "./Components/UI/Button";
import VoteTable from "./assets/vote-table.png";
import PetBreed from "./assets/pet-breeds.png";
import Gallery from "./assets/Gallery.png";
import logo from "./assets/Logo.png";
import HomePic from "./Components/UI/HomePic";
import Header from "./Components/UI/Header";

import GalleryPage from "./Components/GalleryPage";

import BreedsPage from "./Components/BreedsPage";
import VotingApp from "./Components/VotingApp";
import FavouritesPage from "./Components/FavouritesPage";
import LikedPage from "./Components/LikedPage";
import SearchPage from "./Components/SearchPage";

let subId = Math.random().toString(36).substring(7);
function App() {
  const [curPage, setCurPage] = useState("");
  const [userPage, setUserPage] = useState("");
  const [content, setContent] = useState();
  const onVoteHandler = () => {
    setCurPage("vote");
    setUserPage("");
    setContent(<VotingApp subId={subId} />);
  };

  const backButtonHandler = () => {
    console.log("Hello");
  };

  const onBreedsHandler = () => {
    setCurPage("breeds");
    setUserPage("");
    setContent(<BreedsPage></BreedsPage>);
    console.log("Breed");
  };

  const onGalleryHandler = () => {
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
        ></Header>
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
          <img className="logo" src={logo} alt="Logo"></img>
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
