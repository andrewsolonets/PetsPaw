import classes from "./BreedsPage.module.css";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import Grid from "../Components/UI/GridBreeds";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as PageRight } from "../assets/arrowRight.svg";
import { ReactComponent as Reload } from "../assets/reload.svg";
import { ReactComponent as Upload } from "../assets/upload.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { useFetch } from "../hooks/useFetch";
import Select from "react-select";

import Modal from "../Components/ModalUpload";

const GalleryPage = (props) => {
  console.log("GalleryPage render");
  // const [results, setResults] = useState([]);
  const [nameBreed, setNameBreed] = useState({
    value: "",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  // const [breeds, setBreeds] = useState([]);
  const [sorting, setSorting] = useState("rand");
  const [pageNumber, setPageNumber] = useState(0);
  // const [isLoading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [modal, setModal] = useState(false);

  const { apiData, additional, isLoading, fetchData, postAction } = useFetch(
    `images/${type === "upload" ? "?" : "search/?"}`,
    type === "upload"
      ? { limit: resultsLimit, sub_id: "ys1ebn", page: pageNumber }
      : {
          limit: resultsLimit,
          page: pageNumber,
          order: sorting,
          breed_ids: nameBreed.value,
          mime_types: type,
        },
    null,
    "get",
    "gallery"
  );

  useEffect(() => {
    fetchData();
  }, [resultsLimit, sorting, nameBreed, pageNumber, type]);

  const favouritesHandler = (id) => {
    let fav = {
      image_id: id,
      sub_id: props.subId,
    };
    postAction("favourites", {}, fav);
  };

  const options = [{ value: "", label: "None" }, ...(additional || [])];

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
    fetchData();
  };

  const uploadHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classes.containerMain}>
      {modal ? (
        <Modal onClose={closeModalHandler} subId={props.subId}></Modal>
      ) : (
        ""
      )}
      <div className={classes["nav-content1"]}>
        <div className={classes.backGallery}>
          <CardButton>
            <Back className={classes.back} onClick={backHandler} />
          </CardButton>
          <Button style={{ background: "var(--textBlack)" }}>GALLERY</Button>
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
        items={apiData}
        limit={resultsLimit}
        breed={true}
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
