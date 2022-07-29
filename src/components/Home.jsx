import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import { StyledHome } from "./styles/Home.style";

const Home = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies.Search);

  return (
    <StyledHome>
      <div className="heading">
        <h1>Find and learn more about your favorite movies.</h1>
      </div>
    </StyledHome>
  );
};

export default Home;
