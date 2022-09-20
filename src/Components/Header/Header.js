import { useState } from "react";
import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";
import { useEffect } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  BurgerWrapper,
  HeaderWrapper,
  NavLinkHeader,
  NavLinksWrapper,
  NavLinksWrapperSecondary,
} from "./Header.styles";

const Header = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!props.onSearch) {
      setQuery("");
    }
  }, [props.onSearch]);
  return (
    <HeaderWrapper>
      <SearchBar query={query} setQuery={setQuery} onSearch={props.onSearch} />
      <NavLinksWrapper>
        <BurgerWrapper>{props.children}</BurgerWrapper>
        <NavLinksWrapperSecondary>
          <NavLinkHeader to="/liked">
            <Like />
          </NavLinkHeader>
          <NavLinkHeader to="/favourites">
            <Fav />
          </NavLinkHeader>
          <NavLinkHeader to="/disliked">
            <DisLike />
          </NavLinkHeader>
        </NavLinksWrapperSecondary>
      </NavLinksWrapper>
    </HeaderWrapper>
  );
};
export default Header;
