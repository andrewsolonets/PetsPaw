import Select from "react-select";
import { ReactComponent as Reload } from "../../assets/reload.svg";
import { ReloadButton } from "../../components/Button/Button.styles";
import {
  FilterReloadBox,
  FilterWrapperChild,
  GalleryFiltersWrapper,
} from "./Filters.styles";
import { withTheme } from "styled-components";

const GalleryFilters = ({
  breeds,
  sortingHandler,
  filterHandler,
  typeHandler,
  limitChangeHandler,
  reloadHandler,
  theme,
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

      backgroundColor: state.isFocused ? theme.bg : theme.backgroundBlock,

      background: state.isFocused ? theme.bg : theme.backgroundBlock,

      ":hover": {
        backgroundColor: state.isFocused ? theme.bg : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#8C8C8C",
      fontSize: "1.6rem",
    }),
    menuList: (styles) => ({
      ...styles,
      background: theme.backgroundBlock,
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "5rem",
      },
      "@media (min-width: 37.5em) and (max-width: 75em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em) "],
        width: "40vw",
        height: "5rem",
      },

      width: "23vw",
      height: "5rem",
      fontSize: "1.6rem",
      background: theme.backgroundBlock,
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      borderRadius: "1rem",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "5rem",
      },
      "@media (min-width: 37.5em) and (max-width: 75em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em) "],
        width: "40vw",
        height: "5rem",
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

      backgroundColor: state.isFocused ? theme.bg : theme.backgroundBlock,

      background: state.isFocused ? theme.bg : theme.backgroundBlock,

      ":hover": {
        backgroundColor: state.isFocused ? theme.bg : "",
      },
    }),
    menuList: (styles) => ({
      ...styles,
      background: theme.backgroundBlock,
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
        height: "5rem",
      },
      "@media (min-width: 37.5em) and (max-width: 75em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em) "],
        width: "36vw",
        height: "5rem",
      },
      width: "19.5vw",
      height: "5rem",
      fontSize: "1.6rem",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: theme.backgroundBlock,
      borderRadius: "1rem",
    }),

    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "5rem",
      },
      "@media (min-width: 37.5em) and (max-width: 75em) ": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em) "],
        width: "36vw",
        height: "5rem",
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

export default withTheme(GalleryFilters);
