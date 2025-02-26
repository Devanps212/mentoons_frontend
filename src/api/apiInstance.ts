import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: unknown) => {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message || error.message;
      console.log(errorMessage || "Something went wrong!");
      toast.error(errorMessage, {
        duration: 4000,
      });
    } else {
      console.log("Unknown error occurred", error);
      toast.error("An unexpected error occurred!");
    }

    return Promise.reject(error);
  }
);

export default apiRequest;
