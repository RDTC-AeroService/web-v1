import apiClient from "@/lib/axios";

type LoginResponse = {
  access_token?: string;
  token?: string;
};

type AuthUser = {
  id?: string | number;
  username?: string;
  email?: string;
  role?: string;
};

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const { data } = await apiClient.post("/auth/login", {
      username,
      password,
    });
    return data;
  },

  getMe: async (): Promise<AuthUser> => {
    const { data } = await apiClient.get("/auth/me");
    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};