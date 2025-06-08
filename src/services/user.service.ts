import { toast } from "react-toastify";
import axiosInstance from "../libs/axiosInstance";
import {
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
  toast.info(`${payload.sender.username} sent you a new invitation`);
};
