import classes from "./HomePic.module.css";
import girl from "../../assets/girl-and-pet.svg";
const HomePic = () => {
  return (
    <div className={classes["girl-pets"]}>
      <div></div>
      <img src={girl} alt="Girl"></img>
    </div>
  );
};
export default HomePic;
