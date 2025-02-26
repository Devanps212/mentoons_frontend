import apiRequest from "./apiInstance";

const AuthApi = {
  login: (loginInfo: { email: string; password: string }) =>
    apiRequest.post("/auth/login", loginInfo),
  signUp: (userData: { email: string; name: string; password: string }) =>
    apiRequest.post("/auth/signup", userData),
  logout: () => apiRequest.post("/auth/logout"),
};

export default AuthApi;
