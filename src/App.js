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

let subId = Math.random().toString(36).substring(7);
function App() {
  const [isVoteClicked, setIsVoteClicked] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);
  const [isLikedClicked, setIsLikedClicked] = useState(false);
  const [isDisLikedClicked, setIsDisLikedClicked] = useState(false);
  const [isBreedClicked, setIsBreedClicked] = useState(false);
  const [isGalleryClicked, setIsGalleryClicked] = useState(false);
  const [content, setContent] = useState();
  const onVoteHandler = () => {
    setIsGalleryClicked(false);
    setIsBreedClicked(false);
    setIsVoteClicked(true);
    setIsFavClicked(false);
    setIsLikedClicked(false);
    setIsDisLikedClicked(false);
    setContent(<VotingApp subId={subId} />);
    console.log("Vote");
  };

  const backButtonHandler = () => {
    console.log("Hello");
  };

  const onBreedsHandler = () => {
    setIsGalleryClicked(false);
    setIsVoteClicked(false);
    setIsBreedClicked(true);
    setIsFavClicked(false);
    setIsLikedClicked(false);
    setIsDisLikedClicked(false);
    setContent(<BreedsPage></BreedsPage>);
    console.log("Breed");
  };

  const onGalleryHandler = () => {
    setIsVoteClicked(false);
    setIsBreedClicked(false);
    setIsGalleryClicked(true);
    setIsFavClicked(false);
    setIsLikedClicked(false);
    setIsDisLikedClicked(false);
    setContent(<GalleryPage subId={subId}></GalleryPage>);
  };
  const favouritesPageHandler = () => {
    setIsFavClicked(true);
    setIsLikedClicked(false);
    setIsDisLikedClicked(false);
    setContent(<FavouritesPage />);
  };

  const likedPageHandler = () => {
    setIsLikedClicked(true);
    setIsDisLikedClicked(false);
    setIsFavClicked(false);
    setContent(
      <LikedPage value={1} text={"LIKES"} onBack={backButtonHandler} />
    );
  };

  const DislikePageHandler = () => {
    setIsDisLikedClicked(true);
    setIsLikedClicked(false);
    setIsFavClicked(false);
    setContent(
      <LikedPage value={0} text={"DISLIKES"} onBack={backButtonHandler} />
    );
  };

  let contentApp;

  if (isVoteClicked || isBreedClicked || isGalleryClicked) {
    contentApp = (
      <div className="app">
        <Header
          onFav={favouritesPageHandler}
          fav={isFavClicked}
          like={isLikedClicked}
          dislike={isDisLikedClicked}
          onLike={likedPageHandler}
          onDislike={DislikePageHandler}
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
                    isVoteClicked ? "active" : ""
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
                    isBreedClicked ? "active" : ""
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
                    isGalleryClicked ? "active" : ""
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
