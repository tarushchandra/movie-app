import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchText, defaultPage } from "../features/movies/movieSlice";
import { Image, Search, StyledHeader } from "./styles/Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(updateSearchText(searchText));
    dispatch(defaultPage());
    window.scroll(0, 0);
    setSearchText("");
  }

  return (
    <StyledHeader>
      <header onClick={() => navigate("/")}>
        <h1>Home</h1>
      </header>
      <Search>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          size="28"
          value={searchText}
        />
        <button onClick={handleClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </Search>

      <Image>
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="avtar-img"
        />
      </Image>
    </StyledHeader>
  );
};

export default Header;
