import classes from "./BreedsPage.module.css";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import Grid from "../Components/UI/GridBreeds";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as DescendingIcon } from "../assets/desc.svg";
import { ReactComponent as AscendingIcon } from "../assets/asc.svg";
import { ReactComponent as PageRight } from "../assets/arrowRight.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import Select from "react-select";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BreedsPage = (props) => {
  const [nameBreed, setNameBreed] = useState({
    value: "all-breeds",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  const [sorting, setSorting] = useState("ASC");
  const [pageNumber, setPageNumber] = useState(0);
  const [singleCat, setSingleCat] = useState({ state: false });

  const { apiData, additional, isLoading, fetchData } = useFetch(
    "images/search/?",
    {
      limit: resultsLimit,
      page: pageNumber,
      order: sorting,
      attach_breed: 1,
      breed_ids: nameBreed.value,
    },
    null,
    "get",
    "breeds",
    nameBreed
  );

  const getAllCats = useCallback(() => {
    fetchData(
      "images/search/?",
      {
        limit: resultsLimit,
        page: pageNumber,
        order: sorting,
        attach_breed: 1,
        breed_ids: nameBreed.value,
      },
      null,
      "get",
      "breeds",
      nameBreed
    );
  }, [nameBreed, pageNumber, resultsLimit, sorting]);
  useEffect(() => {
    getAllCats();
  }, [getAllCats]);

  const options = [
    { value: "all-breeds", label: "All breeds" },
    ...(additional?.breeds || []),
  ];

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
      "@media (min-width: 430px) and (max-width: 860px)": {
        ...provided["@media (min-width: 430px) and (max-width: 860px)"],
        width: "33vw",
        height: "7vw",
      },

      width: "16vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--background)",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "100%",
        height: "10vw",
      },
      "@media (min-width: 430px) and (max-width: 860px)": {
        ...provided["@media (min-width: 430px) and (max-width: 860px)"],
        width: "33vw",
        height: "7vw",
      },

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
      "@media (min-width: 430px) and (max-width: 860px)": {
        ...provided["@media (min-width: 430px) and (max-width: 860px)"],
        width: "25vw",
        height: "7vw",
      },
      // none of react-select's styles are passed to <Control />
      width: "12vw",
      height: "3.2vw",
      border: state.isFocused ? 0 : 0,
      outline: "none",
      boxShadow: "none",
      background: "var(--background)",
      borderRadius: "10px",
    }),
    container: (provided, state) => ({
      ...provided,
      "@media only screen and (max-width: 425px)": {
        ...provided["@media (max-width: 425px)"],
        width: "70%",
        height: "10vw",
      },

      "@media (min-width: 430px) and (max-width: 860px)": {
        ...provided["@media (min-width: 430px) and (max-width: 860px)"],
        width: "25vw",
        height: "7vw",
      },
      width: "12vw",
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const limitChangeHandler = (value) => {
    console.log(value.value);
    setResultsLimit(value.value);
  };

  const sortingDescHandler = () => {
    if (nameBreed.value === "all-breeds") setSorting("DESC");
  };
  const sortingAscHandler = () => {
    if (nameBreed.value === "all-breeds") setSorting("ASC");
  };
  const filterHandler = (value) => {
    setNameBreed(value);
    setPageNumber(0);
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setPageNumber((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  const prevPageHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setPageNumber((prevState) => {
      console.log(prevState);
      return prevState - 1;
    });
  };

  const catPageHandler = () => {
    props.oneCat({ results: apiData, breed: additional?.breed });
  };

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton onClick={backHandler}>
          <Back className={classes.back} />
        </CardButton>
        <Button
          style={{ background: "var(--textBlack)" }}
          active={singleCat.state}
        >
          BREEDS
        </Button>
        {menuBar}
      </div>
      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        // cssOverride={override}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      <Grid
        onCat={catPageHandler}
        items={apiData}
        limit={resultsLimit}
        breed={additional?.breed}
        loading={isLoading}
        onAction={actionGridHandler}
        onPage={false}
      ></Grid>

      <div className={classes.paginationContainer}>
        <button
          className={classes.buttonPagination}
          disabled={pageNumber === 0 ? true : false}
          onClick={prevPageHandler}
        >
          <PageRight className={`${classes.arrow} ${classes.left}`}></PageRight>{" "}
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
    </div>
  );
};

export default BreedsPage;
