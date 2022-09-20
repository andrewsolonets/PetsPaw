import { ReactComponent as PageRight } from "../../assets/arrowRight.svg";
import { ButtonPagination } from "../../Components/Button/Button.styles";
import { PaginationWrapper } from "./PaginationContainer.styles";

export const PaginationContainer = ({ pageNumber, setPageNumber }) => {
  const nextPageHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setPageNumber((prevState) => {
      return prevState + 1;
    });
  };

  const prevPageHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setPageNumber((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <PaginationWrapper>
      <ButtonPagination
        disabled={pageNumber === 0 ? true : false}
        onClick={prevPageHandler}
      >
        <PageRight></PageRight> PREV
      </ButtonPagination>
      <ButtonPagination disabled={false} onClick={nextPageHandler}>
        NEXT <PageRight></PageRight>
      </ButtonPagination>
    </PaginationWrapper>
  );
};
