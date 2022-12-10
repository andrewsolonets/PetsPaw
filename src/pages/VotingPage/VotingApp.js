import React from "react";

import { MainContentContainer } from "../../Components/styles/globalstyles.styles";

import { useFetch } from "../../hooks/useFetch";
import UserLog from "../UserLog/UserLog";
import { PageNavBar } from "../../Components/PageNavBar/PageNavBar";
import { UserActions } from "../UserActions/UserActions";
import { ContainerImg, ImgWrapper } from "./VotingApp.styles";
import { useQuery } from "@tanstack/react-query";

const VotingApp = (props) => {
  const { fetchOneCat, logVoteAction, addVoteHandler, prefetchCat } = useFetch(
    "images/search",
    null,
    null,
    "get"
  );

  const { data: votingCat } = useQuery({
    queryKey: ["votingCat"],
    queryFn: fetchOneCat,
  });

  const { data: logVotes } = useQuery({
    queryKey: ["logVotes"],
    queryFn: logVoteAction,
  });

  const addFavouriteHandler = () => {
    let catJson = {
      image_id: votingCat.id,
      sub_id: props.subId,
    };
    addVoteHandler(catJson);
  };

  // USE USEEFFECT FOR REPEATED ACTIONS
  const addLikeHandler = () => {
    let catJson = {
      image_id: votingCat.id,
      sub_id: props.subId,
      value: 1,
    };
    prefetchCat();
    addVoteHandler(catJson);
  };

  const addDislikeHandler = () => {
    let catJson = {
      image_id: votingCat.id,
      sub_id: props.subId,
      value: 0,
    };
    prefetchCat();
    addVoteHandler(catJson);
  };

  return (
    <MainContentContainer>
      <PageNavBar title={"VOTING"} />

      <ContainerImg>
        <ImgWrapper>
          <img src={votingCat?.url} alt="testImg"></img>
        </ImgWrapper>

        <UserActions
          addDislikeHandler={addDislikeHandler}
          addLikeHandler={addLikeHandler}
          addFavouriteHandler={addFavouriteHandler}
          img={votingCat}
        />
      </ContainerImg>

      <UserLog log={logVotes} />
    </MainContentContainer>
  );
};

export default VotingApp;
