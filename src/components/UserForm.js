import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import "./UserForm.css";
const UserForm = (props) => {
  const [eneterdUsername, setEnteredUSername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUSername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorDismissHandler = () => {
    setInvalidInput(false);
  };

  const [erm, setErm] = useState("");
  //   const content = <ErrorModal message={errorMessage1}></ErrorModal>;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (eneterdUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErm("Please enter a valid name and age (non empty value)");
      setInvalidInput(true);
      setEnteredAge("");
      setEnteredUSername("");
      return;
    }

    if (Number.parseInt(enteredAge) <= 0) {
      setErm("Please enter a valid age(>0)");
      setInvalidInput(true);
      setEnteredAge("");
      setEnteredUSername("");
      return;
    }
    const userData = {
      name: eneterdUsername,
      age: enteredAge,
    };

    props.onFormSubmit(userData);

    setEnteredAge("");
    setEnteredUSername("");
  };
  return (
    <div>
      {invalidInput && (
        <ErrorModal
          message={erm}
          onErrorDismiss={errorDismissHandler}
        ></ErrorModal>
      )}
      {!invalidInput && (
        <div className="form-container">
          <form className="user-form" onSubmit={submitFormHandler}>
            <p>
              <label>Username</label>
              <br></br>
              <input
                type="text"
                onChange={usernameChangeHandler}
                value={eneterdUsername}
              ></input>
            </p>
            <p>
              <label>Age (Years)</label>
              <br></br>
              <input
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              ></input>
            </p>
            <button type="submit" className="form-button">
              Add User
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
