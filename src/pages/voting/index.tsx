import React, { useEffect } from "react";

import { MainContentContainer } from "../../components/styles/globalstyles.styles";

import { useFetch } from "../../hooks/useFetch";
import UserLog from "../UserLog/UserLog";
import { PageNavBar } from "../../components/PageNavBar/PageNavBar";
import { UserActions } from "../UserActions/UserActions";
import { ContainerImg, ImgWrapper } from "./VotingApp.styles";

const VotingApp = (props) => {
  const { apiData, fetchData, additional, isLoading, postAction, logAction } =
    useFetch("images/search", null, null, "get");

  useEffect(() => {
    logAction();
  }, [apiData]);

  useEffect(() => {
    fetchData();
  }, []);

  const addFavouriteHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
    };
    postAction("favourites", {}, catJson);
    logAction();
  };

  // USE USEEFFECT FOR REPEATED ACTIONS
  const addLikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 1,
    };
    postAction("votes", {}, catJson);
  };

  const addDislikeHandler = () => {
    let catJson = {
      image_id: apiData[0]?.id,
      sub_id: props.subId,
      value: 0,
    };
    postAction("votes", {}, catJson);
  };

  return (
    <MainContentContainer>
      <PageNavBar title={"VOTING"} additional={undefined} />

      <ContainerImg>
        <ImgWrapper>
          {isLoading ? "" : <img src={apiData[0]?.url} alt="testImg"></img>}
        </ImgWrapper>

        <UserActions
          addDislikeHandler={addDislikeHandler}
          addLikeHandler={addLikeHandler}
          addFavouriteHandler={addFavouriteHandler}
          img={apiData}
        />
      </ContainerImg>

      <UserLog log={additional} />
    </MainContentContainer>
  );
};

export default VotingApp;
