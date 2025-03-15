import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { refreshUserToken } from "../services/auth.service";
import { errorResponseSchema } from "../validators/response.validator";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    //--TODO: Implement the logic to handle the error
    const err = error as AxiosError;
    if (err.code === "ERR_NETWORK") {
      toast.error("Network error");
    } else if (err.response && err.response.status === 401) {
      await refreshUserToken();
    } else if (err.response && err.response.status === 500) {
      toast.error("Internal server error");
    } else {
      const errorData = errorResponseSchema.parse(err.response?.data);
      toast.error(errorData.message);
    }
  }
);

export default axiosInstance;
