import Select from "react-select";
import { ReactComponent as DescendingIcon } from "../../assets/desc.svg";
import { ReactComponent as AscendingIcon } from "../../assets/asc.svg";
import { SortingButton } from "../../components/Button/Button.styles";
import { withTheme } from "styled-components";

const BreedsFilters = ({
  breeds,
  filterHandler,
  limitChangeHandler,
  sortingDescHandler,
  sortingAscHandler,
  theme,
}) => {
  const options = [{ value: "all-breeds", label: "All breeds" }, ...breeds];

  const options2 = [
    { value: 5, label: "Limit: 5" },
    { value: 10, label: "Limit: 10" },
    { value: 15, label: "Limit: 15" },
    { value: 20, label: "Limit: 20" },
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
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 75em)": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em)"],
        width: "33vw",
        height: "5rem",
      },

      width: "16vw",
      height: "4.4rem",
      fontSize: "1.6rem",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: theme.bg,
      borderRadius: "1rem",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 75em)": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em)"],
        width: "33vw",
        height: "5rem",
      },

      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const customStyles2 = {
    option: (provided, state, isDisabled, isFocused, isSelected) => ({
      ...provided,
      color: "#8C8C8C",
      fontSize: "1.6rem",

      backgroundColor: isDisabled
        ? theme.backgroundBlock
        : isSelected
        ? theme.backgroundBlock
        : isFocused
        ? theme.bg
        : theme.backgroundBlock,

      // background: state.isFocused ? theme.bg : theme.backgroundBlock,

      ":hover": {
        backgroundColor: state.isFocused ? theme.bg : "",
      },
      ":active": {
        ...provided[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? theme.bg
            : theme.backgroundBlock
          : undefined,
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
        height: "10vw",
      },
      "@media (min-width: 37.5em) and (max-width: 75em)": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em)"],
        width: "25vw",
        height: "5rem",
      },
      // none of react-select's styles are passed to <Control />
      width: "12vw",
      height: "4.4rem",
      fontSize: "1.6rem",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: theme.bg,
      borderRadius: "1rem",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 37.5em)": {
        ...provided["@media (max-width: 37.5em)"],
        width: "70%",
        height: "10vw",
      },

      "@media (min-width: 37.5em) and (max-width: 75em)": {
        ...provided["@media (min-width: 37.5em) and (max-width: 75em)"],
        width: "25vw",
        height: "5rem",
      },
      width: "12vw",
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  return (
    <>
      <Select
        onChange={filterHandler}
        options={options}
        styles={customStyles}
        placeholder={"All breeds"}
      />
      <Select
        options={options2}
        styles={customStyles2}
        onChange={limitChangeHandler}
        placeholder={"Limit: 10"}
      />
      <SortingButton onClick={sortingDescHandler}>
        <DescendingIcon></DescendingIcon>
      </SortingButton>
      <SortingButton onClick={sortingAscHandler}>
        <AscendingIcon></AscendingIcon>
      </SortingButton>
    </>
  );
};

export default withTheme(BreedsFilters);
