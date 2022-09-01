import React from "react";
import { Redirect, Route } from "react-router-dom";

function RetailerRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const isRetailer = localStorage.getItem("isRetailer");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && isRetailer ? <Component {...props} /> : <Redirect to="/unauthorized" />
      }
    />
  );
}

export default RetailerRoute;