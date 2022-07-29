import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../api/movieAPI";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page, searchText, contentType }) => {
    const response = await movieAPI.get(
      `https://www.omdbapi.com/?apikey=3aae4d59&s=${searchText}&page=${page}&type=${contentType}`
    );
    return response.data;
  }
);

export const fetchMoviesDetails = createAsyncThunk(
  "movies/fetchMoviesDetails",
  async ({ imdbID }) => {
    const response = await movieAPI.get(
      `https://www.omdbapi.com/?apikey=3aae4d59&plot=full&i=${imdbID}`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  movieDetails: {},
  pageNumber: 1,
  search: "titanic",
  loading: false,
  loadingDetails: false,
  contentType: "movie",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    defaultPage: (state) => {
      state.pageNumber = 1;
    },
    incrementPage: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    decrementPage: (state) => {
      state.pageNumber = state.pageNumber - 1;
    },
    updateSearchText: (state, action) => {
      state.search = action.payload;
    },
    changeContentType: (state, action) => {
      state.contentType = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [fetchMoviesDetails.pending]: (state) => {
      state.loadingDetails = true;
    },
    [fetchMoviesDetails.fulfilled]: (state, action) => {
      state.loadingDetails = false;
      state.movieDetails = action.payload;
    },
  },
});

export const {
  addMovies,
  updateSearchText,
  incrementPage,
  decrementPage,
  defaultPage,
  changeContentType,
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieDetail = (state) => state.movies.movieDetails;
export const getPageNumber = (state) => state.movies.pageNumber;
export const getSearchText = (state) => state.movies.search;
export const getLoadingInfo = (state) => state.movies.loading;
export const getContentType = (state) => state.movies.contentType;
export default movieSlice.reducer;
