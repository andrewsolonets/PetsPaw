import CardButton from "../UI/CardButton";
import { NavWrapper, NavTitle, NavButton } from "./PageNavBar.styles";

export const PageNavBar = ({ backHandler }) => {
  return (
    <NavWrapper>
      <CardButton onClick={backHandler}>
        <NavButton />
      </CardButton>
      <NavTitle>VOTING</NavTitle>
    </NavWrapper>
  );
};
