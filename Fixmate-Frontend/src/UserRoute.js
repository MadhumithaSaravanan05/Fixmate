import React from "react";
import { Redirect, Route } from "react-router-dom";

function UserRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const isUser = localStorage.getItem("isUser");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && isUser ? <Component {...props} /> :  <Redirect to="/unauthorized" /> 
      }
    />
  );
}

export default UserRoute;