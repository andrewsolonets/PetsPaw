import CardButton from "../UI/CardButton";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/search.svg";

export const SearchBar = ({ query, setQuery }) => {
  return (
    <div className={classes.searchContainer}>
      <form className={classes.searchBar}>
        <input
          style={style}
          className={classes.searchInput}
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for breeds by name"
        ></input>
        <NavLink
          className={classes.searchBtn}
          to={`/search/${query ? query : "please type anything"}`}
        >
          <CardButton>
            <Search className={classes.searchIcon} />
          </CardButton>
        </NavLink>
      </form>
    </div>
  );
};
