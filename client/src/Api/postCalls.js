//axios
import instance from "../axios/instance";

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/users/login", {
    email,
    password,
  });
};
