import React, { useState } from "react";

import { GlobalStyles } from "./Components/styles/globalstyles.styles";

import { ReactComponent as Logo1 } from "./assets/logo2.svg";

import { RoutesContainer } from "./routes/Routes";
import {
  FixedMainContainer,
  LogoContainerLink,
  LogoSwitchContainer,
  MainContainer,
  SwitchContainer,
  TextLogoContainer,
} from "./App.styles";
import { MainPageFixed } from "./Components/MainPageFixed/MainPageFixed";

let subId = Math.random().toString(36).substring(7);
function App() {
  const [theme, setTheme] = useState("light");
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(false);

  // const defaultDarkTheme =
  //   window.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false;

  const toggleThemeHandler = () => {
    console.log("theme");
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--background",
        "var(--darkBg)"
      );
      document.documentElement.style.setProperty("--textBlack", "var(--white)");
      document.documentElement.style.setProperty(
        "--backgroundBlock",
        "var(--dark)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock2",
        "var(--dark2)"
      );
      document.documentElement.style.setProperty(
        "--btnColor",
        "var(--btnColorDark)"
      );
      setTheme("dark");
    }
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--background",
        "var(--whiteBg)"
      );
      document.documentElement.style.setProperty(
        "--textBlack",
        "var(--darkBg)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock",
        "var(--white)"
      );
      document.documentElement.style.setProperty(
        "--backgroundBlock2",
        "var(--whiteBg)"
      );
      document.documentElement.style.setProperty(
        "--btnColor",
        "var(--btnColorLight)"
      );
      setTheme("light");
    }
  };

  const catHandler = ({ results, breed }) => {
    console.log(results);
    setResults(results);
    setBreed(breed);
  };

  const searchClickHandler = ({ results, breed }) => {
    console.log(results);
    setResults([results]);
    setBreed(breed);
  };

  return (
    <React.Fragment>
      <MainContainer>
        <LogoSwitchContainer>
          <LogoContainerLink to={"/"}>
            <Logo1></Logo1>
            <TextLogoContainer />
          </LogoContainerLink>
          <SwitchContainer>
            <input type="checkbox" onClick={toggleThemeHandler} />
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
    </React.Fragment>
  );
}

export default App;
