import Carousel from "../Components/UI/Slider";
import { useState, useEffect, useCallback } from "react";
import { MainContentContainer } from "../Components/styles/globalstyles.styles";
import { useParams } from "react-router-dom";
import classes from "./BreedsPage.module.css";
import CardButton from "../Components/UI/CardButton";
import Button from "../Components/UI/Button";
import { ReactComponent as Back } from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PageNavBar } from "../Components/PageNavBar/PageNavBar";

const SingleCat = ({ items, breed, search = false }) => {
  const params = useParams();
  // const [images, setImages] = useState();
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  console.log(items, search);

  const { apiData: images, fetchData } = useFetch(
    `images/search/?`,
    {
      limit: 5,
      breed_ids: search
        ? params.cat
        : breed
        ? items[params.id].breeds[0].id
        : items[params.id].id,
    },
    null,
    "get"
  );
  console.log(images);

  useEffect(() => {
    fetchData();
  }, [items, params.cat]);

  return (
    <MainContentContainer>
      <PageNavBar
        backHandler={backHandler}
        title={"BREEDS"}
        additional={<div className={classes.catId}>{params.cat}</div>}
      />

      <div className="singleCat">
        <div className="parentImg">
          <div className="containerImg">
            <Carousel images={images}></Carousel>
          </div>
        </div>
        <div className="ContentContainer">
          <div className="headingCat">
            {breed ? items[params.id].breeds[0].name : items[params.id].name}
          </div>

          <div className="catDesc">
            <div className="mainDescr">
              {breed
                ? items[params.id].breeds[0].description
                : items[params.id].description}
            </div>
            <div className="propsContainer">
              <div className="textDescr">
                <p>
                  <b>Temperament:</b>
                  <br></br>
                  {breed
                    ? items[params.id].breeds[0].temperament
                    : items[params.id].temperament}
                </p>
              </div>

              <div className="textDescr">
                <p>
                  <b>Origin:</b>{" "}
                  {breed
                    ? items[params.id].breeds[0].origin
                    : items[params.id].origin}
                  <br></br>
                  <b>Weight:</b>{" "}
                  {`${
                    breed
                      ? items[params.id].breeds[0].weight.metric
                      : items[params.id].weight.metric
                  } kgs`}
                  <br></br>
                  <b>Life span:</b>{" "}
                  {`${
                    breed
                      ? items[params.id].breeds[0].life_span
                      : items[params.id].life_span
                  } years`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContentContainer>
  );
};

export default SingleCat;
