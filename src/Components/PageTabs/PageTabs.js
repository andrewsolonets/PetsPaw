import Button from "../Button/Button";
import {
  OptionButton,
  OptionButtonContainer,
} from "../MainPageFixed/MainPageFixed.styles";
import VoteTable from "../../assets/vote-table.png";
import PetBreed from "../../assets/pet-breeds.png";
import Gallery from "../../assets/Gallery.png";

export const PageTabs = ({ toggleHambHandler, mobile }) => {
  return (
    <>
      <OptionButton to="/voting" onClick={mobile ? toggleHambHandler : ""}>
        <OptionButtonContainer element={1}>
          <img src={VoteTable} alt="VoteTable"></img>
        </OptionButtonContainer>
        <Button>VOTING</Button>
      </OptionButton>
      <OptionButton to="/breeds" onClick={mobile ? toggleHambHandler : ""}>
        <OptionButtonContainer element={2}>
          <img src={PetBreed} alt="PetBreed"></img>
        </OptionButtonContainer>
        <Button>BREEDS</Button>
      </OptionButton>
      <OptionButton to="/gallery" onClick={mobile ? toggleHambHandler : ""}>
        <OptionButtonContainer element={3}>
          <img src={Gallery} alt="Gallery"></img>
        </OptionButtonContainer>
        <Button>GALLERY</Button>
      </OptionButton>
    </>
  );
};
