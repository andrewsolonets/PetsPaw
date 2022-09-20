import { BurgerMenu } from "../styles/MobileMenu.styles";

const Menu = (props) => {
  return <BurgerMenu state={props.hamburger}>{props.children}</BurgerMenu>;
};
export default Menu;
