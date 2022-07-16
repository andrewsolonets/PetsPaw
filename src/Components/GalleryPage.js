import classes from "./BreedsPage.module.css";
import CardButton from "./UI/CardButton";
import Button from "./UI/Button";
import Grid from "./UI/GridBreeds";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as PageRight } from "../assets/arrowRight.svg";
import { ReactComponent as Reload } from "../assets/reload.svg";
import { ReactComponent as Upload } from "../assets/upload.svg";
import { ReactComponent as Back } from "../assets/back.svg";

import BounceLoader from "react-spinners/BounceLoader";

import Select from "react-select";

import Modal from "./ModalUpload";

const GalleryPage = (props) => {
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState(true);
  const [nameBreed, setNameBreed] = useState({
    value: "",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  const [breeds, setBreeds] = useState([]);
  const [sorting, setSorting] = useState("rand");
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [singleCat, setSingleCat] = useState({ state: false });
  const [type, setType] = useState("");
  const [modal, setModal] = useState(false);

  const getAllCats = useCallback(
    async (value = nameBreed) => {
      console.log(sorting);
      setLoading(true);
      setResults([]);
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search/?` +
          new URLSearchParams({
            limit: resultsLimit,
            page: pageNumber,
            order: sorting,
            breed_ids: value.value,
            mime_types: type,
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
      const response2 = await fetch(
        `https://api.thecatapi.com/v1/breeds/?` +
          new URLSearchParams({
            limit: resultsLimit,
            page: pageNumber,
            order: sorting,
          }),
        {
          headers: {
            "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
          },
        }
      );
      const data2 = await response2.json();
      console.log(data2);
      const breeds = data2.map((el) => {
        return { value: el.id, label: el.name };
      });
      setBreeds(breeds);
      // set setBreeds to the breeds id as a value and name as a label for select options
      setLoading(false);
    },
    [resultsLimit, sorting, nameBreed, pageNumber, type]
  );
  useEffect(() => {
    getAllCats();
  }, [getAllCats]);

  const favouritesHandler = async (id) => {
    let fav = {
      image_id: id,
      sub_id: props.subId,
    };
    const response = await fetch("https://api.thecatapi.com/v1/favourites", {
      method: "POST",
      body: JSON.stringify(fav),
      headers: {
        "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    // const response = await fetch(
    //   `https://api.thecatapi.com/v1/favourites/${id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "x-api-key": "4072d7cf-ded4-47a3-bf51-39851c2428b8",
    //     },
    //   }
    // );
    // console.log(response);
  };

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

      backgroundColor: state.isFocused ? "var(--background)" : "",

      background: state.isFocused ? "var(--background)" : "",

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
      width: "23vw",
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      color: "#8C8C8C",

      backgroundColor: state.isFocused ? "var(--background)" : "",

      background: state.isFocused ? "var(--background)" : "",

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
      borderColor: state.isFocused ? "#fffff" : "#fffff",
    }),
    indicatorSeparator: (provided, state) => ({}),
  };

  const limitChangeHandler = (value) => {
    setResultsLimit(value.value);
  };

  const sortingHandler = (value) => {
    if (!nameBreed.value) setSorting(value.value);
  };

  const filterHandler = (value) => {
    setNameBreed(value);
    setPageNumber(0);
    // getAllCats(value, true);
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
  const typeHandler = (value) => {
    setType(value.value);
  };

  const reloadHandler = () => {
    getAllCats();
  };

  const uploadHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <div className={classes.containerMain}>
      {modal ? <Modal onClose={closeModalHandler}></Modal> : ""}
      <div className={classes["nav-content1"]}>
        <div className={classes.backGallery}>
          <CardButton>
            <Back className={classes.back} />
          </CardButton>
          <Button
            style={{ background: "var(--textBlack)" }}
            active={singleCat.state}
          >
            GALLERY
          </Button>
        </div>
        <div className={classes.upload} onClick={uploadHandler}>
          <Upload className={classes.reloadSvg}></Upload> UPLOAD
        </div>
      </div>
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
      <BounceLoader
        color={"var(--main)"}
        loading={isLoading}
        // cssOverride={override}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      <Grid
        items={results}
        limit={resultsLimit}
        breed={breed}
        loading={isLoading}
        onFav={favouritesHandler}
        onPage={true}
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

export default GalleryPage;
