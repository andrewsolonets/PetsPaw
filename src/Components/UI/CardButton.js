import classes from "./CardButton.module.css";

const CardButton = (props) => {
  return (
    <div className={classes.cardbutton} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default CardButton;
