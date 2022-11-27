import Grid from "../../components/Grid/Grid";
import { useEffect, useState } from "react";
import { MainContentContainer } from "../../components/styles/globalstyles.styles";
import BounceLoader from "react-spinners/BounceLoader";
import { useFetch } from "../../hooks/useFetch";
import { PageNavBar } from "../../components/PageNavBar/PageNavBar";
import BreedsFilters from "../../components/FiltersContainer/BreedsFilters";
import { PaginationContainer } from "../../components/PaginationContainer/PaginationContainer";
import React from "react";

const BreedsPage = (props) => {
  const [nameBreed, setNameBreed] = useState({
    value: "all-breeds",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  const [sorting, setSorting] = useState("ASC");
  const [pageNumber, setPageNumber] = useState(0);
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

  const catPageHandler = () => {
    props.oneCat({ results: apiData, breed: additional?.breed });
  };

  return (
    <MainContentContainer>
      <PageNavBar
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
        color={"#FF868E"}
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
        onPage={false}
        page={"breeds"}
      ></Grid>

      <PaginationContainer
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </MainContentContainer>
  );
};

export default BreedsPage;
