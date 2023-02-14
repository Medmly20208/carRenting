import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

//components
import Header from "../Components/Header";
import Cars from "../Components/Cars";
import Login from "../Components/login";
import Signup from "../Components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Cars />
      </>
    ),
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
]);

export default router;
