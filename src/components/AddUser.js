import React, { useState,useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState("");
  const submitHandler = (event) => {
    const entertedUserName =nameInputRef.current.value;
    const entertedUserAge =ageInputRef.current.value;
    event.preventDefault();
    if (entertedUserName.trim().length === 0 || entertedUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+entertedUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age  greater than 0",
      });
      return;
    }

    props.onAddUser(entertedUserName, entertedUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value=" ";
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={ErrorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="addname">User name</label>
          <input
            id="addname"
            type="text"
            ref ={nameInputRef}
          />
          <label htmlFor="age">Age (Years) </label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add user </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
