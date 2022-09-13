import classes from "./BreedsPage.module.css";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import Grid from "../Components/UI/GridBreeds";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as DescendingIcon } from "../assets/desc.svg";
import { ReactComponent as AscendingIcon } from "../assets/asc.svg";
import { ReactComponent as PageRight } from "../assets/arrowRight.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { MainContentContainer } from "../Components/styles/globalstyles.styles";
import Select from "react-select";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PageNavBar } from "../Components/PageNavBar/PageNavBar";
import { BreedsFilters } from "./FiltersContainer/BreedsFilters";

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

  useEffect(() => {
    fetchData();
  }, [nameBreed, pageNumber, resultsLimit, sorting]);

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
    setSingleCat({ state: true, id: id }); // CAN BE REMOVED
  };

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
    <MainContentContainer>
      <PageNavBar
        backHandler={backHandler}
        title={"BREEDS"}
        additional={
          <BreedsFilters
            breeds={additional?.breeds || []}
            filterHandler={filterHandler}
            limitChangeHandler={limitChangeHandler}
            sortingDescHandler={sortingDescHandler}
            sortingAscHandler={sortingAscHandler}
          />
        }
      />

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
    </MainContentContainer>
  );
};

export default BreedsPage;
