import { useState } from "react";
import Logo1 from "./assets/logo2.svg";
import { RoutesContainer } from "../routes/Routes";
import { GlobalStyles } from "../components/styles/globalstyles.styles";
import {
  FixedMainContainer,
  LogoContainerLink,
  LogoSwitchContainer,
  MainContainer,
  SwitchContainer,
  TextLogoContainer,
} from "../../styles/App.styles";
import { MainPageFixed } from "../components/MainPageFixed/MainPageFixed";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../components/styles/themes";
import { useThemeChange } from "../hooks/useThemeChange";
import * as React from "react";

let subId = Math.random().toString(36).substring(7);
function App() {
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(false);
  const [theme, themeToggler] = useThemeChange();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const catHandler = ({ results, breed }) => {
    setResults(results);
    setBreed(breed);
  };

  const searchClickHandler = ({ results, breed }) => {
    setResults([results]);
    setBreed(breed);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <MainContainer>
          <LogoSwitchContainer>
            <LogoContainerLink to={"/"}>
              <Logo1></Logo1>
              <TextLogoContainer />
            </LogoContainerLink>
            <SwitchContainer>
              <div onClick={themeToggler}>
                <input type="checkbox" />
              </div>
              <span></span>
            </SwitchContainer>
          </LogoSwitchContainer>
          <FixedMainContainer>
            <MainPageFixed />
          </FixedMainContainer>
        </MainContainer>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
