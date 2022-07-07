import React, { useState } from "react";

import "./App.css";

import Button from "./Components/UI/Button";
import VoteTable from "./assets/vote-table.png";
import PetBreed from "./assets/pet-breeds.png";
import Gallery from "./assets/Gallery.png";
import logo from "./assets/Logo.png";
import HomePic from "./Components/UI/HomePic";
import Header from "./Components/UI/Header";
import MainPic from "./Components/MainPic";
import backArrow from "./assets/backArrow.png";
import CardButton from "./Components/UI/CardButton";
import VotingApp from "./Components/VotingApp";
import FavouritesPage from "./Components/FavouritesPage";

function App() {
  const [isVoteClicked, setIsVoteClicked] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);

  const onVoteHandler = () => {
    setIsVoteClicked(true);
    console.log("Vote");
  };

  const onBreedsHandler = () => {
    console.log("Breed");
  };
  const favouritesPageHandler = () => {
    setIsFavClicked(true);
  };

  const contentApp = (
    <div className="app">
      <Header onFav={favouritesPageHandler}></Header>
      <div className="appContent">
        {isFavClicked ? <FavouritesPage /> : <VotingApp />}
      </div>
    </div>
  );

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
                <div className="option-button" onClick={onBreedsHandler}>
                  <div className="breed-container">
                    <img src={PetBreed} alt="PetBreed"></img>
                  </div>
                  <Button>BREEDS</Button>
                </div>
                <div className="option-button">
                  <div className="gallery-container">
                    <img src={Gallery} alt="Gallery"></img>
                  </div>
                  <Button>GALLERY</Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {isVoteClicked ? contentApp : <HomePic />}
      </div>
    </React.Fragment>
  );
}

export default App;
