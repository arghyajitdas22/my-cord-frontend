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
      localStorage.setItem("accessToken", data.accessToken);
      setUser({ ...data.user, accessToken: data.accessToken });
      toast.success("User registered successfully");
      navigate(`/chat`);
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      setUser({ ...data.user, accessToken: data.accessToken });
      toast.success("User logged in successfully");
      navigate(`/chat`);
    },
  });

  return { registerMutation, loginMutation };
};
