import React from "react";
import { StyledPagination } from "../styles/Pagination.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPage,
  getPageNumber,
  incrementPage,
} from "../../features/movies/movieSlice";

const Pagination = () => {
  const page = useSelector(getPageNumber);
  const dispatch = useDispatch();

  function handleDecrement() {
    dispatch(decrementPage());
  }

  function handleIncrement() {
    dispatch(incrementPage());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledPagination>
      <i onClick={handleDecrement} className="fa-solid fa-caret-left"></i>
      <h1>{page}</h1>
      <i onClick={handleIncrement} className="fa-solid fa-caret-right"></i>
    </StyledPagination>
  );
};

export default Pagination;
