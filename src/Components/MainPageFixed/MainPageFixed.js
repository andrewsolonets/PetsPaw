import Button from "../UI/Button";

import VoteTable from "../../assets/vote-table.png";
import PetBreed from "../../assets/pet-breeds.png";
import Gallery from "../../assets/Gallery.png";

import {
  GreetingsText,
  FixedSection,
  OptionsContainer,
  OptionsContainerSecond,
  OptionButton,
  OptionButtonContainer,
} from "./MainPageFixed.styles";

export const MainPageFixed = () => {
  return (
    <FixedSection>
      <GreetingsText>
        <h1>Hi intern!</h1>
        <p>Welcome to MI 2022 Front-end test</p>
      </GreetingsText>

      <OptionsContainer>
        <p>Lets start using The Cat API</p>
        <OptionsContainerSecond>
          <OptionButton to="/voting">
            <OptionButtonContainer element={1}>
              <img src={VoteTable} alt="VoteTable"></img>
            </OptionButtonContainer>
            <Button>VOTING</Button>
          </OptionButton>
          <OptionButton to="/breeds">
            <OptionButtonContainer element={2}>
              <img src={PetBreed} alt="PetBreed"></img>
            </OptionButtonContainer>
            <Button>BREEDS</Button>
          </OptionButton>
          <OptionButton to="/gallery">
            <OptionButtonContainer element={3}>
              <img src={Gallery} alt="Gallery"></img>
            </OptionButtonContainer>
            <Button>GALLERY</Button>
          </OptionButton>
        </OptionsContainerSecond>
      </OptionsContainer>
    </FixedSection>
  );
};
