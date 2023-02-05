import React from "react";

import Card from "../UI/Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return props.users.length ? (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age})
            </li>
          );
        })}
      </ul>
    </Card>
  ) : null;
};

export default UsersList;
