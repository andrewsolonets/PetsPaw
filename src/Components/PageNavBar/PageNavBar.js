import { CardButton } from "../Button/Button.styles";
import {
  NavWrapper,
  NavTitle,
  BackButton,
  MainNavWrapper,
} from "./PageNavBar.styles";
import { useNavigate } from "react-router-dom";

export const PageNavBar = ({ title, additional }) => {
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <NavWrapper>
      <MainNavWrapper>
        <CardButton onClick={backHandler}>
          <BackButton />
        </CardButton>
        <NavTitle>
          <span>{title}</span>
        </NavTitle>
        {additional && title === "BREEDS" ? additional : ""}
      </MainNavWrapper>
      {additional && title !== "BREEDS" ? additional : ""}
    </NavWrapper>
  );
};
