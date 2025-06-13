import { toast } from "react-toastify";
import axiosInstance from "../libs/axiosInstance";
import {
  allInvitationsResponseSchema,
  searchUserResponseSchema,
  TFriendRequestSocketPayloadSchema,
} from "../validators/response.validator";

export const searchUser = async (pageParam: number, search: string) => {
  const response = await axiosInstance.get("/users/search", {
    params: { search, page: pageParam, limit: 5 },
  });
  const validatedResponse = searchUserResponseSchema.parse(response);
  return validatedResponse.data;
};

export const handleFriendRequestNotification = (
  payload: TFriendRequestSocketPayloadSchema
) => {
  console.log("here", payload);
  toast.info(`${payload.sender.username} sent you a new invitation`);
};

export const sendFriendRequest = async (receiverId: string) => {
  const response = await axiosInstance.post(
    `/users/send-friend-request/${receiverId}`
  );
  return response;
};

export const fetchAllInvitations = async () => {
  const response = await axiosInstance("/users/getAllInvitations");
  const validatedResponse = allInvitationsResponseSchema.parse(response);
  return validatedResponse.data;
};
