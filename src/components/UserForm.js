import React, { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";
import "./UserForm.css";
const UserForm = (props) => {
  const [invalidInput, setInvalidInput] = useState(false);

  const errorDismissHandler = () => {
    setInvalidInput(false);
  };

  const [erm, setErm] = useState("");

  const enteredUserName = useRef();
  const enteredAge = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const username = enteredUserName.current.value;
    const age = enteredAge.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErm("Please enter a valid name and age (non empty value)");
      setInvalidInput(true);

      enteredUserName.current.value = "";
      enteredAge.current.value = "";
      return;
    }

    if (Number.parseInt(age) <= 0) {
      setErm("Please enter a valid age(>0)");
      setInvalidInput(true);

      enteredUserName.current.value = "";
      enteredAge.current.value = "";
      return;
    }
    const userData = {
      name: username,
      age,
    };

    console.log(userData);
    props.onFormSubmit(userData);

    enteredUserName.current.value = "";
    enteredAge.current.value = "";
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
              <input type="text" ref={enteredUserName}></input>
            </p>
            <p>
              <label>Age (Years)</label>
              <br></br>
              <input type="number" ref={enteredAge}></input>
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
