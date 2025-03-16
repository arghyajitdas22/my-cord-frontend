import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/auth.service";
import { toast } from "react-toastify";
import { useUser } from "./useUser";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const setUser = useUser((state) => state.setUser);
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      const accessToken = data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      setUser(data.data.user);
      toast.success("User registered successfully");
      navigate(`/channel/${data.data.user._id}`);
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
      navigate(`/channel/${data.data.user._id}`);
    },
  });

  return { registerMutation, loginMutation };
};
