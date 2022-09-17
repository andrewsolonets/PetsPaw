import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";
import { ReactComponent as Fav } from "../../assets/fav.svg";

export const UserLogElement = styled.div`
  flex: 1;
  display: flex;
  background: var(--backgroundBlock2);
  border-radius: 1rem;
  padding: 1.4rem;
  color: #8c8c8c;
  align-items: center;
  font-weight: 400;
  gap: 1.4rem;
  b {
    font-weight: 500;
    color: var(--textBlack);
  }

  span {
    font-size: 1.6rem;
  }

  @media (max-width: 37.5em) {
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backgroundBlock);
  padding: 0.3rem 1rem;
  border-radius: 5px;

  span {
    color: var(--textBlack);
  }
`;

export const UserLogInfo = styled.div`
  flex: 1;
`;

export const LikeUserLogIcon = styled(Like)`
  path {
    fill: #97eab9;
  }
`;

export const DislikeUserLogIcon = styled(DisLike)`
  path {
    fill: #ffd280;
  }
`;

export const FavUserLogIcon = styled(Fav)`
  path {
    fill: #ff868e;
  }
`;

export const UserLogIcon = styled.div`
  svg {
    width: 2rem;
  }

  @media (max-width: 37.5em) {
    position: absolute;
    top: 1.87rem;
  }

  align-self: flex-end;
`;

// .userLogElement {
//   flex: 1;
//   display: flex;
//   background: var(--backgroundBlock2);
//   border-radius: 10px;
//   padding: 1vw;
//   color: #8c8c8c;
//   align-items: center;
//   font-weight: 400;
//   gap: 1vw;
// }
// .userLogElement b {
//   font-weight: 500;
//   color: var(--textBlack);
// }

// .time {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--backgroundBlock);
//   padding: 0.2vw;
//   border-radius: 5px;
// }
// .time span {
//   color: var(--textBlack);
// }
// .userLogInfo {
//   flex: 1;
// }
// .userLogIcon {
//   align-self: flex-end;
// }

// @media (max-width: 37.5em) {
//   .userLogElement {
//     align-items: flex-start;
//     padding: 4vw;
//     flex-direction: column;
//   }
//   .userlogP {
//     font-size: 4vw;
//   }
//   .time {
//     align-self: flex-start;
//     padding: 0.8vw;
//   }
//   .userLogIcon {
//     position: absolute;
//     justify-self: top;
//   }
// }
