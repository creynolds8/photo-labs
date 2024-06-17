import React from "react";

import "../styles/ErrorMessage.scss";

const ErrorMessage = function ({ error }) {
  return (
    <div className="error-message">
      <h2>We are very sorry, but an error has occured:</h2>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
