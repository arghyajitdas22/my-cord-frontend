import axiosInstance from "../libs/axiosInstance";
import { searchUserResponseSchema } from "../validators/response.validator";

export const searchUser = async (pageParam: number, search: string) => {
  const response = await axiosInstance.get("/users/search", {
    params: { search, page: pageParam, limit: 5 },
  });
  const validatedResponse = searchUserResponseSchema.parse(response);
  return validatedResponse.data;
};
