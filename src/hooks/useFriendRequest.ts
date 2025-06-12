import { useMutation } from "@tanstack/react-query";
import { sendFriendRequest } from "../services/user.service";
import { toast } from "react-toastify";

export const useFriendRequest = () => {
  const sendFrienRequestMutation = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () => {
      toast.success("Friend Request successfully sent!");
    },
  });

  return { sendFrienRequestMutation };
};
