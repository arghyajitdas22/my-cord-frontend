import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAllInvitations,
  sendFriendRequest,
  updateFriendRequestStatus,
} from "../services/user.service";
import { toast } from "react-toastify";

export const useFriendRequest = () => {
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
      console.log(data);
    },
  });

  return {
    sendFrienRequestMutation,
    getAllInvitations,
    updateFriendRequestMutation,
  };
};
