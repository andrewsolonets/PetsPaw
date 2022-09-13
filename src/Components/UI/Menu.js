import { BurgerMenu } from "../styles/MobileMenu.styles";

const Menu = (props) => {
  console.log(props.hamburger);
  return <BurgerMenu state={props.hamburger}>{props.children}</BurgerMenu>;
};
export default Menu;
