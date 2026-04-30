import apiClient from "@/lib/axios";
import { AuthInput, AuthResult, SignInData } from "../shared/types/user.type";

export const authService = {
  authenticate: async (input: AuthInput): Promise<AuthResult> => {
    const payload = new URLSearchParams();
    payload.append("username", input.username);
    payload.append("password", input.password);

    const { data } = await apiClient.post("/auth/login", payload, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return data;
  },

  getMe: async (): Promise<SignInData> => {
    const { data } = await apiClient.get("/auth/me", {
      withCredentials: true,
    });

    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout", {}, { withCredentials: true });

    document.cookie = "token=; path=/; max-age=0";

    localStorage.removeItem("token");
  },
};
