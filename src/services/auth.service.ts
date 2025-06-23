import {
  loginUserSchema,
  registerUserSchema,
  TUSerStorage,
} from "../validators/user.validator";
import axiosInstance from "../libs/axiosInstance";
import { IRegisterUserSchema } from "../components/auth/RegisterForm";
import { registerUserResponseSchema } from "../validators/response.validator";
import { ILoginUserSchema } from "../components/auth/LoginForm";
import { toast } from "react-toastify";

const registerUser = async (registerFormData: IRegisterUserSchema) => {
  const refinedUserData = {
    email: registerFormData.email,
    displayName: registerFormData.displayName,
    username: registerFormData.username,
    password: registerFormData.password,
    dateOfBirth: {
      month: registerFormData.month,
      day: registerFormData.day,
      year: registerFormData.year,
    },
  };
  const validatedUser = registerUserSchema.parse(refinedUserData);
  const response = await axiosInstance.post("/auth/register", validatedUser);
  const validatedResponse = registerUserResponseSchema.parse(response);
  return validatedResponse.data;
};

const loginUser = async (loginFormData: ILoginUserSchema) => {
  const validatedUser = loginUserSchema.parse(loginFormData);
  const response = await axiosInstance.post("/auth/login", validatedUser);
  console.log(response);
  const validatedResponse = registerUserResponseSchema.parse(response);
  console.log(validatedResponse);
  return validatedResponse.data;
};

const refreshUserToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token");
    const validatedResponse = registerUserResponseSchema.parse(response);
    localStorage.setItem("accessToken", validatedResponse.data.accessToken);
  } catch (error) {
    await logoutUser();
    toast.error("Session expired. Please login again");
  }
};

const logoutUser = async () => {
  try {
    const userData = localStorage.getItem("user-storage")
      ? (JSON.parse(
          localStorage.getItem("user-storage") as string
        ) as TUSerStorage)
      : null;
    if (userData) {
      await axiosInstance.post("/auth/logout", {
        userId: userData.state.user._id,
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user-storage");
    }
    window.location.href = "/login";
  } catch (error) {
    toast.error("Could not logout user");
  }
};

export { registerUser, loginUser, refreshUserToken, logoutUser };
