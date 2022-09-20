import React, { useState } from "react";
import { ReactComponent as Logo1 } from "./assets/logo2.svg";
import { RoutesContainer } from "./routes/Routes";
import { GlobalStyles } from "./Components/styles/globalstyles.styles";
import {
  FixedMainContainer,
  LogoContainerLink,
  LogoSwitchContainer,
  MainContainer,
  SwitchContainer,
  TextLogoContainer,
} from "./App.styles";
import { MainPageFixed } from "./Components/MainPageFixed/MainPageFixed";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Components/styles/themes";
import { useThemeChange } from "./hooks/useThemeChange";

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
              <input type="checkbox" onClick={themeToggler} />
              <span></span>
            </SwitchContainer>
          </LogoSwitchContainer>
          <FixedMainContainer>
            <MainPageFixed />
          </FixedMainContainer>
          <RoutesContainer
            subId={subId}
            catHandler={catHandler}
            results={results}
            breed={breed}
            searchClickHandler={searchClickHandler}
          />
        </MainContainer>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
