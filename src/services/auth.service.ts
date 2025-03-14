import {
  loginUserSchema,
  registerUserSchema,
} from "../validators/user.validator";
import axiosInstance from "../libs/axiosInstance";
import { IRegisterUserSchema } from "../components/auth/RegisterForm";
import { registerUserResponseSchema } from "../validators/response.validator";
import { ILoginUserSchema } from "../components/auth/LoginForm";

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

export { registerUser, loginUser };
