import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FixedSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 425px) {
    width: 100%;
    align-items: flex-start;
    padding-left: 0;
    gap: 10vw;
    padding-top: 20vw;
    padding-right: 0;
    margin-right: 0;
  }
`;

export const GreetingsText = styled.div`
  margin-bottom: 5.9rem;
  p {
    color: #8c8c8c;
  }
  @media (max-width: 425px) {
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    gap: 6vw;
    p {
      width: 100%;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-weight: 500;
  }
  @media (max-width: 425px) {
    margin-left: 3vw;
    gap: 5vw;
    width: 96%;
  }
`;

export const OptionsContainerSecond = styled.div`
  display: flex;
  gap: 0.694vw;
`;
export const OptionButtonContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 14rem;
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;

  img {
    ${(props) =>
      props.element && props.element === 1
        ? "height:12.5rem"
        : props.element === 2
        ? "height:16.3rem"
        : props.element === 3
        ? "height:20rem"
        : ""}
  }

  ${(props) =>
    props.element && props.element === 1
      ? "background-color: #b4b7ff"
      : props.element === 2
      ? "background: #97eab9"
      : props.element === 3
      ? "background: #ffd280"
      : ""}
`;

export const OptionButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    ${OptionButtonContainer} {
      border: 4px solid var(--backgroundBlock);
    }
    Button {
      background: var(--btnColor);
    }
  }
  &:active {
    ${OptionButtonContainer} {
      border: 4px solid var(--btnColor);
    }
    Button {
      color: var(--textWhite);
      background: var(--main);
    }
  }
  &:focus {
    ${OptionButtonContainer} {
      border: 4px solid var(--btnColor);
    }
    Button {
      color: var(--textWhite);
      background: var(--main);
    }
  }
`;
