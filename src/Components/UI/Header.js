import classes from "./Header.module.css";
import CardButton from "./CardButton";
import { useState } from "react";
import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [query, setQuery] = useState("");

  let style;
  style = props.onSearch ? { borderColor: " var(--main)" } : {};

  return (
    <div className={classes.header}>
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
          <NavLink className={classes.searchBtn} to={`/search/${query}`}>
            <CardButton>
              <Search className={classes.searchIcon} />
            </CardButton>
          </NavLink>
        </form>
      </div>
      <div className={classes.userPages}>
        <div className={classes["ham"]}>{props.children}</div>
        <div className={classes.userPages2}>
          <NavLink
            className={(state) => {
              return state.isActive ? classes.activeIcon : classes["like-icon"];
            }}
            to="/liked"
          >
            <Like className={classes.iconSvgHead} />
          </NavLink>
          <NavLink
            className={(state) => {
              return state.isActive ? classes.activeIcon : classes["like-icon"];
            }}
            to="/favourites"
          >
            <Fav className={classes.iconSvgHead} />
          </NavLink>
          <NavLink
            className={(state) => {
              return state.isActive ? classes.activeIcon : classes["like-icon"];
            }}
            to="/disliked"
          >
            <DisLike className={classes.iconSvgHead} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
