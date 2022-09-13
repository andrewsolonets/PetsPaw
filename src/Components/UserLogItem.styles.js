import styled from "styled-components";

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

export const UserLogIcon = styled.div`
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

// @media (max-width: 425px) {
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
