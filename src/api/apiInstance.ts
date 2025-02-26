import axios, { AxiosError } from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else {
      console.log("Unknown error occurred", error);
    }

    return Promise.reject(error);
  }
);

export default apiRequest;
