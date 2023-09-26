import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const userNameChangeHandler= event =>{
    setUserName(event.target.value);
  }
  const userAgeChangeHandler= event =>{
    setUserAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length===0 || userAge.trim().length ===0 ){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values)'
        })
        return ;

    }
    if(+userAge<1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age  greater than 0'
        })
        return;
    }
    
    props.onAddUser(userName,userAge);
    setUserAge("");
    setUserName('');
  };

  const ErrorHandler =()=>{
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal  onConfirm={ErrorHandler} title={error.title} message ={error.message}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="addname">User name</label>
        <input value={userName} onChange={userNameChangeHandler} id="addname" type="text" />
        <label htmlFor="age">Age (Years) </label>
        <input value={userAge}  onChange={userAgeChangeHandler} id="age" type="number" />
        <Button type="submit">Add user </Button>
      </form>
    </Card>
          
    </div>
  );
};

export default AddUser;
