import React,{useState} from 'react';
import './App.css';
import AddUser from "./components/AddUser";
import UsersList from './components/UsersList';

function App() {
  const[usersList,setUsersList]= useState([]);
  const addUserHandler=(userName, userAge)=>{
    setUsersList((prevUser)=>{return[...prevUser,{name:userName, age:userAge, id: Math.random().toString()}]});
  }
  return (
    <div className="App">
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </div>
  );
}

export default App;
