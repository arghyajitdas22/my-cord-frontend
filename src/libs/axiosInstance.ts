import axios from "axios";

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
    console.log(error);
    //--TODO: Implement the logic to handle the error and remove this console.log
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    //--TODO: Implement the logic to handle the response and remove this console.log
    return response;
  },
  async (error) => {
    //--TODO: Implement the logic to handle the error
    console.log(error);
  }
);

export default axiosInstance;
