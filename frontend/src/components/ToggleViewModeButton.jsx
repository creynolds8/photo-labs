import React from "react";

const ToggleViewModeButton = ({ dispatch }) => {
  return (
    <div className="view-mode-button">
      <button onClick={() => dispatch({type: 'toggle--view-mode'})}>
        click to toggle view mode
      </button>
    </div>
  );
};

export default ToggleViewModeButton;