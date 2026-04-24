import apiClient from "@/lib/axios";
import { AuthInput, AuthResult, SignInData } from "../shared/types/user.type";

export const authService = {
  authenticate: async (input : AuthInput): Promise<AuthResult> => {
    const { data } = await apiClient.post("/auth/login", {
      username: input.username,
      password: input.password,
    });
    return data;
  },

  getMe: async (): Promise<SignInData> => {
    const { data } = await apiClient.get("/auth/me");
    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};