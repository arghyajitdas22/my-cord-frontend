import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/auth.service";
import { toast } from "react-toastify";
import { useUser } from "./useUser";

export const useAuth = () => {
  const setUser = useUser((state) => state.setUser);

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      const accessToken = data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      setUser(data.data.user);
      toast.success("User registered successfully");
    },
    onError: () => {
      toast.error("User could not be registered");
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const accessToken = data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      setUser(data.data.user);
      toast.success("User logged in successfully");
    },
    onError: () => {
      //--TODO: Add error handling
      toast.error("User could not be logged in");
    },
  });

  return { registerMutation, loginMutation };
};
