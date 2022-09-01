import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const isAdmin = localStorage.getItem("isAdmin");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && isAdmin ? <Component {...props} /> : <Redirect to="/unauthorized" />
      }
    />
  );
}

export default AdminRoute;