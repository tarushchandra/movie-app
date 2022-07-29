import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "../styles/Card.style";

const Card = ({ image, imdbID }) => {
  return (
    <StyledCard>
      <Link to={`/movies/${imdbID}`}>
        <img className="image" src={image} alt="movie-img" />
      </Link>
    </StyledCard>
  );
};

export default Card;
