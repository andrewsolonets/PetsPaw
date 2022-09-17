import Select from "react-select";
import { ReactComponent as Reload } from "../../assets/reload.svg";
import { ReloadButton } from "../../Components/Button/Button.styles";
import {
  FilterReloadBox,
  FilterWrapperChild,
  GalleryFiltersWrapper,
} from "./Filters.styles";

export const GalleryFilters = ({
  breeds,
  sortingHandler,
  filterHandler,
  typeHandler,
  limitChangeHandler,
  reloadHandler,
}) => {
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
      fontSize: "1.6rem",

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
      fontSize: "1.6rem",
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 56.25em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 56.25em) "],
        width: "40vw",
        height: "5vw",
      },

      width: "23vw",
      height: "3.2vw",
      fontSize: "1.6rem",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--backgroundBlock)",
      borderRadius: "1rem",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 56.25em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 56.25em) "],
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
      fontSize: "1.6rem",

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
      fontSize: "1.6rem",
    }),
    control: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 56.25em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 56.25em) "],
        width: "36vw",
        height: "5vw",
      },
      width: "19.5vw",
      height: "3.2vw",
      fontSize: "1.6rem",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--backgroundBlock)",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 56.25em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 56.25em) "],
        width: "36vw",
        height: "5vw",
      },
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  return (
    <GalleryFiltersWrapper>
      <FilterWrapperChild>
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
      </FilterWrapperChild>

      <FilterWrapperChild>
        <p>TYPE</p>
        <Select
          onChange={typeHandler}
          options={optionsType}
          styles={customStyles}
          placeholder={"All"}
        />

        <p>LIMIT</p>
        <FilterReloadBox>
          <Select
            options={options2}
            styles={customStyles2}
            onChange={limitChangeHandler}
            placeholder={"10 items per page"}
          />

          <ReloadButton onClick={reloadHandler}>
            <Reload />
          </ReloadButton>
        </FilterReloadBox>
      </FilterWrapperChild>
    </GalleryFiltersWrapper>
  );
};
