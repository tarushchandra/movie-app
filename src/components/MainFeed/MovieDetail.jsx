import React, { useEffect } from "react";
import { StyledMovieDetail } from "../styles/MovieDetail.style";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesDetails,
  getMovieDetail,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector(getMovieDetail);
  console.log(movieDetail);

  useEffect(() => {
    dispatch(fetchMoviesDetails({ imdbID }));
  }, [dispatch, imdbID]);

  return (
    <StyledMovieDetail>
      <div className="movie-detail-card">
        <div className="left-section">
          <img src={movieDetail.Poster} alt="poster-img" />
        </div>
        <div className="right-section">
          <div className="basic-info">
            <div className="basic-info-item">
              <i className="fa-solid fa-stars"></i>
              <p>IMDB Rating: {movieDetail.imdbRating}</p>
            </div>
            <div className="basic-info-item">
              <i class="fa-solid fa-stars"></i>
              <p>Runtime: {movieDetail.Runtime}</p>
            </div>
            <div className="basic-info-item">
              <i class="fa-solid fa-stars"></i>
              <p>Year: {movieDetail.Released}</p>
            </div>
            <div className="basic-info-item">
              <i class="fa-solid fa-stars"></i>
              <p>Rated: {movieDetail.Rated}</p>
            </div>
          </div>
          <div className="title">{movieDetail.Title}</div>
          <div className="plot">{movieDetail.Plot}</div>
          <div className="general-info">
            <table>
              <tr>
                <td>Actors:</td>
                <td>{movieDetail.Actors}</td>
              </tr>
              <tr>
                <td>Writer:</td>
                <td>{movieDetail.Writer}</td>
              </tr>
              <tr>
                <td>Director:</td>
                <td>{movieDetail.Director}</td>
              </tr>
              <tr>
                <td>Genre:</td>
                <td>{movieDetail.Genre}</td>
              </tr>
              <tr>
                <td>Language:</td>
                <td>{movieDetail.Language}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{movieDetail.Country}</td>
              </tr>
              <tr>
                <td>Box Office:</td>
                <td>{movieDetail.BoxOffice}</td>
              </tr>
              <tr>
                <td>Awards:</td>
                <td>{movieDetail.Awards}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{movieDetail.Type}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
