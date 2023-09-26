import React from "react";
import Card from "./UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
    if (!props.users || !Array.isArray(props.users)) {
        return null; // or handle it in your desired way
      }
    return (
        <Card className={classes.users}>
          <ul>
            {props.users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        </Card>
      );
};
export default UsersList;
