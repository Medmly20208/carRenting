import { useState } from "react";

import instance from "../axios/instance";
import useAuthContext from "./useAuthContext";

export default function useLogIn(email, password) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const userContext = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    instance
      .post("/users/login", {
        email,
        password,
      })
      .then((result) => {
        setIsLoading(false);
        userContext.dispatch({ type: "LOGIN", payload: result.data.data });
        localStorage.setItem("user", result.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return { error, isLoading, login };
}
