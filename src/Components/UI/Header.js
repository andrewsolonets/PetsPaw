import Search from "../../assets/Search.png";

import classes from "./Header.module.css";
import CardButton from "./CardButton";
import { useState } from "react";
import { ReactComponent as Fav } from "../../assets/fav.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as DisLike } from "../../assets/dislike.svg";

const Header = (props) => {
  const [query, setQuery] = useState("");
  const submitSearchHandler = (e) => {
    console.log(e);
  };
  console.log(query);

  return (
    <div className={classes.header}>
      <div>
        <form className={classes.searchBar} onSubmit={submitSearchHandler}>
          <input
            className={classes.searchInput}
            type="text"
            id="search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for breeds by name"
          ></input>
          <div className={classes.searchBtn}>
            <CardButton>
              <img src={Search} alt="Search-Button"></img>
            </CardButton>
          </div>
        </form>
      </div>
      <div
        className={props.like ? classes.activeIcon : classes["like-icon"]}
        onClick={props.onLike}
      >
        <Like className={classes.iconSvgHead} />
      </div>
      <div
        className={props.fav ? classes.activeIcon : classes["like-icon"]}
        onClick={props.onFav}
      >
        <Fav className={classes.iconSvgHead} />
      </div>
      <div
        className={props.dislike ? classes.activeIcon : classes["like-icon"]}
        onClick={props.onDislike}
      >
        <DisLike className={classes.iconSvgHead} />
      </div>
    </div>
  );
};
export default Header;
