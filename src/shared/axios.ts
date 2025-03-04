import axios from "axios";

const axiosInstance = axios.create({
  responseType: "json",
  headers: {
    "content-type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_APP_URL, // Использование переменной окружения
});

export const setupAxios = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = false;
      return config;
    },
    (error) => {
      console.error("axios error: ", error);
      // toast.error(error.message || "An unexpected error occurred.");
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
