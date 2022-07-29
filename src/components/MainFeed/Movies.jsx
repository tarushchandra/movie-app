import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  getAllMovies,
  getContentType,
  getPageNumber,
  getSearchText,
} from "../../features/movies/movieSlice";
import { StyledMovies } from "../styles/Movies.style";
import Card from "./Card";
import Pagination from "./Pagination";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const page = useSelector(getPageNumber);
  const searchText = useSelector(getSearchText);
  const contentType = useSelector(getContentType);

  useEffect(() => {
    dispatch(fetchMovies({ page, searchText, contentType }));
  }, [dispatch, page, searchText, contentType]);

  return (
    <StyledMovies>
      <div>
        {movies.Search?.map((card, index) => {
          return <Card key={index} image={card.Poster} imdbID={card.imdbID} />;
        })}
      </div>
      <Pagination />
    </StyledMovies>
  );
};

export default Movies;
