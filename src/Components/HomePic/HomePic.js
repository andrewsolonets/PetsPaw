import girl from "../../assets/girl-and-pet.svg";
import { HomePicWrapper } from "./HomePic.styled";
const HomePic = () => {
  return (
    <HomePicWrapper>
      <div></div>
      <img src={girl} alt="Girl"></img>
    </HomePicWrapper>
  );
};
export default HomePic;
