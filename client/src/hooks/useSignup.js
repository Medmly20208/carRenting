import { useState } from "react";

import instance from "../axios/instance";
import useAuthContext from "./useAuthContext";

export default function useSignUp(email, password) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const userContext = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    instance
      .post("/users/signup", {
        email,
        password,
      })
      .then((result) => {
        userContext.dispatch({ type: "LOGIN", payload: result.data.data });
        localStorage.setItem("user", result.data.data);

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return { error, isLoading, signup };
}
