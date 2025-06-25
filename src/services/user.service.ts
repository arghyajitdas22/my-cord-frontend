import { toast } from "react-toastify";
import axiosInstance from "../libs/axiosInstance";
import {
  allChatsResponseScahema,
  allInvitationsResponseSchema,
  allMessagesResponseSchema,
  chatResponseSchema,
  searchUserResponseSchema,
  TFriendRequestSocketPayloadSchema,
} from "../validators/response.validator";
import { FriendRequestStatus } from "../assets/data/data";

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
  const response = await axiosInstance.get("/users/getAllInvitations");
  const validatedResponse = allInvitationsResponseSchema.parse(response);
  return validatedResponse.data;
};

export const updateFriendRequestStatus = async (data: {
  reqId: string;
  status: FriendRequestStatus;
}) => {
  const { reqId, status } = data;
  const response = await axiosInstance.patch(
    `/users/change-friend-request-status/${reqId}`,
    { status }
  );
  if (status === FriendRequestStatus.REJECTED) return undefined;
  const validatedResponse = chatResponseSchema.parse(response);
  return validatedResponse.data;
};

export const getAllChats = async (serverId: string | null) => {
  const response = await axiosInstance.get(
    serverId ? `/chat/${serverId}` : "/chat"
  );
  const validatedResponse = allChatsResponseScahema.parse(response);
  return validatedResponse.data;
};

export const getAllMessages = async (chatId: string) => {
  const response = await axiosInstance.get(`/message/${chatId}`);
  const validatedResponse = allMessagesResponseSchema.parse(response);
  return validatedResponse.data;
};
