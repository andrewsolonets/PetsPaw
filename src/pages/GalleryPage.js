import Grid from "../components/Grid/Grid";
import { UploadButton } from "../components/Button/Button.styles";
import { useEffect, useState } from "react";
import { MainContentContainer } from "../components/styles/globalstyles.styles";

import { ReactComponent as Upload } from "../assets/upload.svg";
import BounceLoader from "react-spinners/BounceLoader";
import { useFetch } from "../hooks/useFetch";

import Modal from "../components/ModalUpload/ModalUpload";
import { PageNavBar } from "../components/PageNavBar/PageNavBar";
import GalleryFilters from "./FiltersContainer/GalleryFilters";
import { PaginationContainer } from "./PaginationContainer/PaginationContainer";

const GalleryPage = (props) => {
  const [nameBreed, setNameBreed] = useState({
    value: "",
    label: "All breeds",
  });
  const [resultsLimit, setResultsLimit] = useState(10);
  const [sorting, setSorting] = useState("rand");
  const [pageNumber, setPageNumber] = useState(0);
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
        color={"#FF868E"}
        loading={isLoading}
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
        setPageNumber={setPageNumber}
      />
    </MainContentContainer>
  );
};

export default GalleryPage;
