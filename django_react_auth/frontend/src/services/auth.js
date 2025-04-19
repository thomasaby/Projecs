import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth",
});

export const register = (userData) => api.post("/register/", userData);
export const login = (credentials) => api.post("/login/", credentials);
export const logout = (refreshToken) =>
  api.post("/logout/", { refresh: refreshToken });

// Add JWT to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
