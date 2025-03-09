import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/auth.service";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      //--TODO: Implement the logic to handle the response
      console.log("data shd be logged by interceptor");
    },
    onError: (error) => {
      //--TODO: Implement the logic to handle the error
      console.log("error shd be logged by interceptor");
    },
  });

  return { registerMutation };
};
