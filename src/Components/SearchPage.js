import { useEffect } from "react";
import Grid from "./Grid/Grid";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MainContentContainer } from "./styles/globalstyles.styles";

import BounceLoader from "react-spinners/BounceLoader";
import { PageNavBar } from "./PageNavBar/PageNavBar";
import { SearchParagraph } from "../../styles/App.styles";

const SearchPage = (props) => {
  const params = useParams();

  const {
    apiData: searchItems,
    isLoading,
    fetchData,
  } = useFetch(
    `breeds/search/?q=${params.searchItem}`,
    {},
    null,
    "get",
    "search"
  );

  useEffect(() => {
    fetchData();
  }, [params.searchItem]);

  const singleSearch = () => {
    props.onClick({ results: searchItems, breed: true, search: true });
  };

  return (
    <MainContentContainer>
      <PageNavBar title={props.text} />

      <SearchParagraph>
        Search results for:<b>{` ${params.searchItem}`}</b>
      </SearchParagraph>
      <BounceLoader
        color={"#FF868E"}
        loading={isLoading}
        cssOverride={{ marginTop: "5vw" }}
        size={50}
        speedMultiplier={1.5}
      ></BounceLoader>
      {!isLoading && searchItems && (
        <Grid
          page={"search"}
          onSingle={singleSearch}
          items={[searchItems]}
          isLoading={isLoading}
        ></Grid>
      )}
    </MainContentContainer>
  );
};

export default SearchPage;
