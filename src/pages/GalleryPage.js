import Grid from "../Components/UI/Grid";
import { UploadButton } from "../Components/UI/Button.styles";
import { useEffect, useState } from "react";
import { MainContentContainer } from "../Components/styles/globalstyles.styles";

import { ReactComponent as Upload } from "../assets/upload.svg";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { useFetch } from "../hooks/useFetch";

import Modal from "../Components/ModalUpload";
import { PageNavBar } from "../Components/PageNavBar/PageNavBar";
import { GalleryFilters } from "./FiltersContainer/GalleryFilters";
import { PaginationContainer } from "./PaginationContainer/PaginationContainer";

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
    <MainContentContainer>
      {modal ? (
        <Modal onClose={closeModalHandler} subId={props.subId}></Modal>
      ) : (
        ""
      )}

      <PageNavBar
        title={"GALLERY"}
        additional={
          <UploadButton onClick={uploadHandler}>
            <Upload></Upload> UPLOAD
          </UploadButton>
        }
      />

      <GalleryFilters
        breeds={additional || []}
        sortingHandler={sortingHandler}
        filterHandler={filterHandler}
        typeHandler={typeHandler}
        limitChangeHandler={limitChangeHandler}
        reloadHandler={reloadHandler}
      />
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
        onAction={favouritesHandler}
        onPage={true}
        page={"gallery"}
      ></Grid>
      <PaginationContainer
        pageNumber={pageNumber}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </MainContentContainer>
  );
};

export default GalleryPage;
