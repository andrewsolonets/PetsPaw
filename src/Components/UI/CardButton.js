import classes from "./CardButton.module.css";

const CardButton = (props) => {
  return <div className={classes.cardbutton}>{props.children}</div>;
};

export default CardButton;
