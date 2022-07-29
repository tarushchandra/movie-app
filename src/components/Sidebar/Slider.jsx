import React from "react";
import { StyledSlider } from "../styles/Sidebar.styles/Slider.style";

const Slider = () => {
  return (
    <StyledSlider>
      <div className="value">Selected Year: 2000</div>
      <div className="field">
        <div className="value left">1900</div>
        <input type="range" min="1900" max="2022" step="1" />
        <div className="value right">2022</div>
      </div>
    </StyledSlider>
  );
};

export default Slider;
