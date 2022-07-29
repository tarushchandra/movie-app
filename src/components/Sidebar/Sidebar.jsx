import React from "react";
import { StyledSidebar } from "../styles/Sidebar.styles/Sidebar.style";
import SidebarList from "./SidebarList";
import { faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarList text="Movies" icon={faFilm} pathText="movies" />
      <SidebarList text="Shows" icon={faVideo} pathText="shows" />
      <hr />
      {/* <Slider />
      <hr /> */}
    </StyledSidebar>
  );
};

export default Sidebar;
