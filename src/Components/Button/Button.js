import { ButtonRegular } from "./Button.styles";

const Button = (props) => {
  return (
    <ButtonRegular onClick={props.onClick}>{props.children}</ButtonRegular>
  );
};

export default Button;
