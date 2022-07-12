import classes from "./BreedsPage.module.css";
import CardButton from "./UI/CardButton";
import Button from "./UI/Button";
import backArrow from "../assets/backArrow.png";
import Grid from "./UI/GridBreeds";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as DescendingIcon } from "../assets/desc.svg";
import { ReactComponent as AscendingIcon } from "../assets/asc.svg";
import { ReactComponent as PageRight } from "../assets/arrowRight.svg";
import Select from "react-select";

const BreedsPage = () => {
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(false);
  const [nameBreed, setNameBreed] = useState({
    value: "all-breeds",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  const [breeds, setBreeds] = useState([]);
  const [sorting, setSorting] = useState("ASC");
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [singleCat, setSingleCat] = useState({ state: false });

  const getAllCats = useCallback(
    async (value = nameBreed) => {
      setLoading(true);
      setResults([]);
      if (
        value.value &&
        value.value !== "all-breeds"
        // (breed && !filter)
      ) {
        setBreed(true);

        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search/?` +
            new URLSearchParams({
              limit: resultsLimit,
              page: pageNumber,
              order: sorting,
              attach_breed: 1,
              breed_ids: value.value,
            }),
          {
            headers: {
              "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
            },
          }
        );
        const data = await response.json();
        setResults(data);
      } else if (
        (value.value && value.value === "all-breeds") ||
        value === "all-breeds"
      ) {
        setBreed(false);
        // setResults([])
        const response = await fetch(
          `https://api.thecatapi.com/v1/breeds/?` +
            new URLSearchParams({
              limit: resultsLimit,
              page: pageNumber,
              order: sorting,
              attach_breed: 1,
              breed_ids: "",
            }),
          {
            headers: {
              "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        const breeds = data.map((el) => {
          return { value: el.id, label: el.name };
        });
        setResults(data);
        setBreeds(breeds);
        // set setBreeds to the breeds id as a value and name as a label for select options
      }
      setLoading(false);
    },
    [resultsLimit, sorting, nameBreed, pageNumber]
  );
  useEffect(() => {
    getAllCats();
  }, [getAllCats]);

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

      backgroundColor: state.isFocused ? "#F8F8F7" : "",

      background: state.isFocused ? "#F8F8F7" : "",

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
      // none of react-select's styles are passed to <Control />
      width: "18vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "#f8f8f7",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      color: "#8C8C8C",

      backgroundColor: state.isFocused ? "#F8F8F7" : "",

      background: state.isFocused ? "#F8F8F7" : "",

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
      // none of react-select's styles are passed to <Control />
      width: "8.8vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "#f8f8f7",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const limitChangeHandler = (value) => {
    setResultsLimit(value.value);
  };

  const sortingDescHandler = () => {
    if (!breed) setSorting("DESC");
  };
  const sortingAscHandler = () => {
    if (!breed) setSorting("ASC");
  };
  const filterHandler = (value) => {
    setNameBreed(value);
    setPageNumber(0);
    // getAllCats(value, true);
  };

  const actionGridHandler = (id) => {
    setSingleCat({ state: true, id: id });
  };

  let menuBar;

  if (singleCat.id) {
    menuBar = <div className={classes.catId}>{singleCat.id}</div>;
  }
  if (!singleCat.id) {
    menuBar = (
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
        <div className={classes.sorting} onClick={sortingDescHandler}>
          <DescendingIcon className={classes.icon}></DescendingIcon>
        </div>
        <div className={classes.sorting} onClick={sortingAscHandler}>
          <AscendingIcon className={classes.icon}></AscendingIcon>
        </div>
      </>
    );
  }

  const nextPageHandler = () => {
    setPageNumber((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  const prevPageHandler = () => {
    setPageNumber((prevState) => {
      console.log(prevState);
      return prevState - 1;
    });
  };

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton>
          <img src={backArrow} alt="back arrow"></img>
        </CardButton>
        <Button style={{ background: "#1d1d1d" }} active={singleCat.state}>
          BREEDS
        </Button>
        {menuBar}
      </div>
      <Grid
        items={results}
        limit={resultsLimit}
        breed={breed}
        loading={isLoading}
        onAction={actionGridHandler}
        onPage={false}
      ></Grid>
      {singleCat ? (
        ""
      ) : (
        <div className={classes.paginationContainer}>
          <button
            className={classes.buttonPagination}
            disabled={pageNumber === 0 ? true : false}
            onClick={prevPageHandler}
          >
            <PageRight
              className={`${classes.arrow} ${classes.left}`}
            ></PageRight>{" "}
            PREV
          </button>
          <button
            className={classes.buttonPagination}
            disabled={false}
            onClick={nextPageHandler}
          >
            NEXT <PageRight className={classes.arrow}></PageRight>
          </button>
        </div>
      )}
    </div>
  );
};

export default BreedsPage;
