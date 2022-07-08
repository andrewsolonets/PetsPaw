import classes from "./BreedsPage.module.css";
import CardButton from "./UI/CardButton";
import Button from "./UI/Button";
import backArrow from "../assets/backArrow.png";
import Grid from "./UI/GridBreeds";
import { useCallback, useEffect, useState } from "react";
import Select from "react-select";

const BreedsPage = () => {
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(false);
  const [resultsLimit, setResultsLimit] = useState(10);
  const [sorting, setSorting] = useState("ASC");
  const [isLoading, setLoading] = useState(true);

  const getAllCats = async (value) => {
    setLoading(true);
    setResults([]);
    if (value?.value && value?.value !== "all-breeds") {
      setBreed(true);

      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search/?` +
          new URLSearchParams({
            limit: resultsLimit,
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
      console.log(data);
      setResults(data);
    } else if (!value || value?.value === "all-breeds") {
      setBreed(false);
      // setResults([])
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds/?` +
          new URLSearchParams({
            limit: resultsLimit,
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
      setResults(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    setResults([]);
    getAllCats();
  }, []);
  // const getBreedCats = useCallback(async () => {
  //   const response = await fetch(
  //     "https://api.thecatapi.com/v1/images/search/?" +
  //       new URLSearchParams({
  //         limit: resultsLimit,
  //         order: sorting,
  //         attach_breed: 1,
  //         breed_ids: nameBreed,
  //       }),
  //     {
  //       headers: {
  //         "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setResults(data);
  // }, [nameBreed, resultsLimit, sorting]);

  const options = [
    { value: "abys", label: "Chocolate" },
    { value: "beng", label: "Strawberry" },
    { value: "all-breeds", label: "Vanilla" },
  ];

  const options2 = [
    { value: 5, label: "Limit: 5" },
    { value: "beng", label: "Strawberry" },
    { value: "all-breeds", label: "Vanilla" },
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
      width: "9vw",
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
    getAllCats();
  };

  return (
    <div className={classes.containerMain}>
      <div className={classes["nav-content"]}>
        <CardButton>
          <img src={backArrow} alt="back arrow"></img>
        </CardButton>
        <Button>BREEDS</Button>
        <Select
          onChange={getAllCats}
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
      </div>
      <Grid
        items={results}
        limit={resultsLimit}
        breed={breed}
        loading={isLoading}
      ></Grid>
      {/* <div className={classes.itemsParent}>
    <div className={classes.item}></div>
    <div className={classes.item2}></div>
    <div className={classes.item2}></div>
  </div> */}
    </div>
  );
};

export default BreedsPage;
