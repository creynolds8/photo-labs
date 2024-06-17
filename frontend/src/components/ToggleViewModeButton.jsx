import React from "react";
import sun from "../assets/sunny.png"
import moon from "../assets/moon.png"
import "../styles/ToggleViewModeButton.scss"

const ToggleViewModeButton = ({ viewMode, dispatch }) => {
  return (
      <button className="view-mode-button" onClick={() => dispatch({type: 'toggle-view-mode'})}>
        {viewMode === "light" && <img src={`${sun}`} className="toggle-icon" />}
        {viewMode === "dark" && <img src={`${moon}`} className="toggle-icon" />}
      </button>
  );
};

export default ToggleViewModeButton;