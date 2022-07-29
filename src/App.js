import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Movies from "./components/MainFeed/Movies";
import MovieDetail from "./components/MainFeed/MovieDetail";
import PageNotFound from "./components/MainFeed/PageNotFound";
import GlobalSyles from "./components/styles/Global.styles";
import { StyledContainer } from "./components/styles/Container.style";

const App = () => {
  return (
    <>
      <GlobalSyles />
      <Header />
      <StyledContainer>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Movies />} />
          <Route path="/movies/:imdbID" element={<MovieDetail />} />
          <Route path="/shows/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </StyledContainer>
    </>
  );
};

export default App;
