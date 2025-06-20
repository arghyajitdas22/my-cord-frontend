import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAllInvitations,
  sendFriendRequest,
  updateFriendRequestStatus,
} from "../services/user.service";
import { toast } from "react-toastify";
import { useChatServices } from "./useChatServices";
import { TChatSchema } from "../validators/user.validator";

export const useFriendRequest = () => {
  const { handleNewChatCreation } = useChatServices();

  const sendFrienRequestMutation = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () => {
      toast.success("Friend Request successfully sent!");
    },
  });

  const getAllInvitations = useQuery({
    queryKey: ["invitations"],
    queryFn: fetchAllInvitations,
  });

  const updateFriendRequestMutation = useMutation({
    mutationFn: updateFriendRequestStatus,
    onSuccess: (data) => {
      handleNewChatCreation(data as TChatSchema);
    },
  });

  return {
    sendFrienRequestMutation,
    getAllInvitations,
    updateFriendRequestMutation,
  };
};
