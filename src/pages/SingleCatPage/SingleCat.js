import Carousel from "../../Components/UI/Slider";
import { useEffect } from "react";
import { MainContentContainer } from "../../Components/styles/globalstyles.styles";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { PageNavBar } from "../../Components/PageNavBar/PageNavBar";
import {
  MainDescrWrapper,
  ParentImgContainer,
  SecondaryDescr,
  SecondaryDescrItem,
  SingleCatContent,
  SingleCatDescription,
  SingleCatHeading,
  SingleCatId,
  SingleCatWrapper,
} from "./SingleCat.styles";

const SingleCat = ({ items, breed, search = false }) => {
  const params = useParams();

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

  useEffect(() => {
    fetchData();
  }, [items, params.cat]);

  return (
    <MainContentContainer>
      <PageNavBar
        title={"BREEDS"}
        additional={<SingleCatId>{params.cat}</SingleCatId>}
      />

      <SingleCatWrapper>
        <ParentImgContainer>
          <div>
            <Carousel images={images}></Carousel>
          </div>
        </ParentImgContainer>
        <SingleCatContent>
          <SingleCatHeading>
            {breed ? items[params.id].breeds[0].name : items[params.id].name}
          </SingleCatHeading>

          <SingleCatDescription>
            <MainDescrWrapper>
              {breed
                ? items[params.id].breeds[0].description
                : items[params.id].description}
            </MainDescrWrapper>
            <SecondaryDescr>
              <SecondaryDescrItem>
                <p>
                  <b>Temperament:</b>
                  <br></br>
                  {breed
                    ? items[params.id].breeds[0].temperament
                    : items[params.id].temperament}
                </p>
              </SecondaryDescrItem>

              <SecondaryDescrItem>
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
              </SecondaryDescrItem>
            </SecondaryDescr>
          </SingleCatDescription>
        </SingleCatContent>
      </SingleCatWrapper>
    </MainContentContainer>
  );
};

export default SingleCat;
