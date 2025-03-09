import { registerUserSchema } from "../validators/user.validator";
import axiosInstance from "../libs/axiosInstance";
import { IRegisterUserSchema } from "../components/auth/RegisterForm";

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
  registerUserSchema.safeParse(refinedUserData);
  //--TODO: remove this console.log
  const response = await axiosInstance.post("/auth/register", refinedUserData);
  //--TODO: Remove this console.log and imlement the actual logic
  console.log("here to check if interceptor has logged");
};

export { registerUser };
