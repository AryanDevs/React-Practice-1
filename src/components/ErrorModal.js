import React from "react";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  const errorDismissHandler = (e) => {
    props.onErrorDismiss();
  };
  return (
    <div className="error-modal">
      <div className="error-heading">
        <h2>Invalid Input</h2>
      </div>
      <div className="error-body">{props.message}</div>
      <div className="error-button-div">
        <button className="error-button" onClick={errorDismissHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
