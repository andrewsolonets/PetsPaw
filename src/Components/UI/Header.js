import classes from "./Header.module.css";
import CardButton from "./CardButton";
import { useState } from "react";
import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

const Header = (props) => {
  const [query, setQuery] = useState("");
  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log(query);
    props.onSearch(query);
    e.value = "";
  };
  console.log(query);

  let styles;

  if (props.search === "search") {
    styles = { borderColor: "var(--main)" };
  }

  return (
    <div className={classes.header}>
      <div className={classes.searchContainer}>
        <form className={classes.searchBar}>
          <input
            style={styles}
            className={classes.searchInput}
            type="text"
            id="search"
            onSubmit={submitSearchHandler}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for breeds by name"
          ></input>
          <div className={classes.searchBtn} onClick={submitSearchHandler}>
            <CardButton>
              <Search className={classes.searchIcon} />
            </CardButton>
          </div>
        </form>
      </div>
      <div className={classes.userPages}>
        <div className={classes["ham"]}>{props.children}</div>
        <div
          className={
            props.userPage === "liked"
              ? classes.activeIcon
              : classes["like-icon"]
          }
          onClick={props.onLike}
        >
          <Like className={classes.iconSvgHead} />
        </div>
        <div
          className={
            props.userPage === "fav" ? classes.activeIcon : classes["like-icon"]
          }
          onClick={props.onFav}
        >
          <Fav className={classes.iconSvgHead} />
        </div>
        <div
          className={
            props.userPage === "disliked"
              ? classes.activeIcon
              : classes["like-icon"]
          }
          onClick={props.onDislike}
        >
          <DisLike className={classes.iconSvgHead} />
        </div>
      </div>
    </div>
  );
};
export default Header;
