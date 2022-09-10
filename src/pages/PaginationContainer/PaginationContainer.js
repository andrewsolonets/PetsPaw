import { ReactComponent as PageRight } from "../../assets/arrowRight.svg";

export const PaginationContainer = ({
  pageNumber,
  prevPageHandler,
  nextPageHandler,
}) => {
  return (
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
  );
};
