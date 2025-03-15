import {
  loginUserSchema,
  registerUserSchema,
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
  return validatedResponse;
};

const loginUser = async (loginFormData: ILoginUserSchema) => {
  const validatedUser = loginUserSchema.parse(loginFormData);
  const response = await axiosInstance.post("/auth/login", validatedUser);
  const validatedResponse = registerUserResponseSchema.parse(response);
  return validatedResponse;
};

const refreshUserToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token");
    const validatedResponse = registerUserResponseSchema.parse(response);
    localStorage.setItem("accessToken", validatedResponse.data.accessToken);
  } catch (error) {
    //--TODO: call logout api
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user-storage");
    window.location.href = "/login";
    toast.error("Session expired. Please login again");
  }
};

export { registerUser, loginUser, refreshUserToken };
