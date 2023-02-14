import useAuthContext from "./useAuthContext";

export default function useLogout() {
  const { dispatch } = useAuthContext();

  const LogOut = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return { LogOut };
}
