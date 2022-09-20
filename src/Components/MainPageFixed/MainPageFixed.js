import {
  GreetingsText,
  FixedSection,
  OptionsContainer,
  OptionsContainerSecond,
} from "./MainPageFixed.styles";
import { PageTabs } from "../PageTabs/PageTabs";

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
          <PageTabs mobile={false} />
        </OptionsContainerSecond>
      </OptionsContainer>
    </FixedSection>
  );
};
