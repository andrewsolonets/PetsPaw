import Search from "../../assets/Search.png";
import Like from "../../assets/Like.png";
import Dislike from "../../assets/Dislike.png";
import Favourites from "../../assets/Favourites.png";
import classes from "./Header.module.css";
import CardButton from "./CardButton";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <form className={classes.searchBar}>
          <input
            className={classes.searchInput}
            type="text"
            id="search"
            placeholder="Search for breeds by name"
          ></input>
          <div className={classes.searchBtn}>
            <CardButton>
              <img src={Search} alt="Search-Button"></img>
            </CardButton>
          </div>
        </form>
      </div>
      <div className={classes["like-icon"]}>
        <img src={Like} alt="tets0" />
      </div>
      <div className={classes["like-icon"]}>
        <img src={Favourites} alt="tets0" />
      </div>
      <div className={classes["like-icon"]}>
        <img src={Dislike} alt="tets0" />
      </div>
    </div>
  );
};
export default Header;
