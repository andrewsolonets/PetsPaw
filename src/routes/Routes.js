import { Route, Routes } from "react-router-dom";
import AppContainer from "../components/AppContainerPage/AppContainerPage";
import HomePic from "../components/HomePic/HomePic";
import VotingApp from "../pages/voting";
import BreedsPage from "../pages/BreedsPage";
import SingleCat from "../pages/SingleCatPage/SingleCat";
import GalleryPage from "../pages/GalleryPage";
import SearchPage from "../components/SearchPage";
import LikedPage from "../components/LikedPage/LikedPage";
import FavouritesPage from "../components/FavouritesPage";

export const RoutesContainer = ({
  subId,
  catHandler,
  results,
  breed,
  searchClickHandler,
}) => {
  return (
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
  );
};
