// next: lib/axios.ts
import axios from "axios";

const isBrowser = typeof window !== "undefined";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// next: lib/axios.ts
apiClient.interceptors.request.use((config) => {
  if (!isBrowser) {
    return config;
  }

  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!isBrowser) {
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const requestUrl = String(error.config?.url || "");
    const isLoginRequest = requestUrl.includes("/auth/login");

    if (status === 401 && !isLoginRequest) {
      window.localStorage.removeItem("token");

      if (window.location.pathname !== "/pages/auth") {
        window.location.href = "/pages/auth";
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
