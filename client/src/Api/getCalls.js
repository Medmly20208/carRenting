//axios
import instance from "../axios/instance";

export const getCars = () => {
  return instance.get("/cars");
};
