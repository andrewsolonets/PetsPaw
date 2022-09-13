import { ReactComponent as PageRight } from "../../assets/arrowRight.svg";
import { ButtonPagination } from "../../Components/UI/Button.styles";
import { PaginationWrapper } from "./PaginationContainer.styles";

export const PaginationContainer = ({
  pageNumber,
  prevPageHandler,
  nextPageHandler,
}) => {
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
