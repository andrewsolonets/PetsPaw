import Select from "react-select";
import { ReactComponent as Reload } from "../../assets/reload.svg";

export const GalleryFilters = ({ breeds }) => {
  const options = [{ value: "", label: "None" }, ...breeds];

  const options2 = [
    { value: 5, label: "5 items per page" },
    { value: 10, label: "10 items per page" },
    { value: 15, label: "15 items per page" },
    { value: 20, label: "20 items per page" },
  ];

  const optionsType = [
    { value: "", label: "All" },
    { value: "jpg,png", label: "Static" },
    { value: "gif", label: "Animated" },
    { value: "upload", label: "Uploaded" },
  ];

  const optionsOrder = [
    { value: "", label: "Random" },
    { value: "DESC", label: "Desc" },
    { value: "ASC", label: "Asc" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "#8C8C8C",

      backgroundColor: state.isFocused
        ? "var(--background)"
        : "var(--backgroundBlock)",

      background: state.isFocused
        ? "var(--background)"
        : "var(--backgroundBlock)",

      "&:hover": {
        backgroundColor: state.isFocused ? "#e6e6e6" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#8C8C8C",
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 430px) and (max-width: 860px) ": {
        ...provided["@media (min-width: 430px) and (max-width: 860px) "],
        width: "40vw",
        height: "5vw",
      },

      width: "23vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--backgroundBlock)",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 430px) and (max-width: 860px) ": {
        ...provided["@media (min-width: 430px) and (max-width: 860px) "],
        width: "40vw",
        height: "5vw",
      },
      width: "23vw",
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      color: "#8C8C8C",

      backgroundColor: state.isFocused
        ? "var(--background)"
        : "var(--backgroundBlock)",

      background: state.isFocused
        ? "var(--background)"
        : "var(--backgroundBlock)",

      "&:hover": {
        backgroundColor: state.isFocused ? "#e6e6e6" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#8C8C8C",
    }),
    control: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 430px) and (max-width: 860px) ": {
        ...provided["@media (min-width: 430px) and (max-width: 860px) "],
        width: "36vw",
        height: "5vw",
      },
      width: "19.5vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--backgroundBlock)",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 430px) and (max-width: 860px) ": {
        ...provided["@media (min-width: 430px) and (max-width: 860px) "],
        width: "36vw",
        height: "5vw",
      },
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  return (
    <div className={classes.filters}>
      <div className={classes.filterWraper}>
        <p>ORDER</p>
        <Select
          onChange={sortingHandler}
          options={optionsOrder}
          styles={customStyles}
          placeholder={"All"}
        />

        <p>BREED</p>
        <Select
          onChange={filterHandler}
          options={options}
          styles={customStyles}
          placeholder={"None"}
        />
      </div>

      <div className={classes.filterWraper}>
        <p>TYPE</p>
        <Select
          onChange={typeHandler}
          options={optionsType}
          styles={customStyles}
          placeholder={"All"}
        />

        <p>LIMIT</p>
        <div className={classes.filterReload}>
          <Select
            options={options2}
            styles={customStyles2}
            onChange={limitChangeHandler}
            placeholder={"10 items per page"}
          />

          <Reload className={classes.reload} onClick={reloadHandler}></Reload>
        </div>
      </div>
    </div>
  );
};