import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

export default function useAuthContext() {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw Error("user Context Must be in top level of function");
  }

  return userContext;
}
