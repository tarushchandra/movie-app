import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Icon,
  StyledSidebarList,
  Text,
} from "../styles/Sidebar.styles/SidebarList.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeContentType } from "../../features/movies/movieSlice";

const SidebarList = ({ text, icon, pathText }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate(`/${pathText}`);
    if (pathText === "movies") {
      dispatch(changeContentType("movie"));
    } else if (pathText === "shows") {
      dispatch(changeContentType("series"));
    }
  }

  return (
    <StyledSidebarList onClick={handleClick}>
      <Icon>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text>{text}</Text>
    </StyledSidebarList>
  );
};

export default SidebarList;
