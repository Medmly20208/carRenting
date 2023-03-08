//axios
import instance from "../axios/instance";

export const login = (email, password) => {
  return instance.post("/users/login", {
    email,
    password,
  });
};
