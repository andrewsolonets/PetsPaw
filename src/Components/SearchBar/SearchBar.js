import { CardButton } from "../UI/Button.styles";
import { ReactComponent as Search } from "../../assets/search.svg";
import {
  SearchBarForm,
  SearchButtonLink,
  SearchInput,
  SearchWrapper,
} from "./SearchBar.styles";

export const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <SearchWrapper>
      <SearchBarForm>
        <SearchInput
          styleChange={onSearch}
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for breeds by name"
        ></SearchInput>
        <SearchButtonLink
          to={`/search/${query ? query : "please type anything"}`}
        >
          <CardButton>
            <Search />
          </CardButton>
        </SearchButtonLink>
      </SearchBarForm>
    </SearchWrapper>
  );
};
