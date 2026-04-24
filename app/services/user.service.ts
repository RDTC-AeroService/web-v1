import apiClient from "@/lib/axios";
import { SeedUser, User, UserWithoutPassword } from "../shared/types/user.type";

const USER_BASE_PATH = "/users";

export type UserListQuery = {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type PaginatedUsersResponse = {
  data: UserWithoutPassword[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type UserPayload = Partial<SeedUser>;

const compactQuery = (query?: UserListQuery): Record<string, unknown> => {
  if (!query) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(query).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );
};

export const userService = {
  list: async (
    query?: UserListQuery,
  ): Promise<PaginatedUsersResponse | UserWithoutPassword[]> => {
    const { data } = await apiClient.get(USER_BASE_PATH, {
      params: compactQuery(query),
    });
    return data;
  },

  getById: async (userId: number): Promise<UserWithoutPassword | User> => {
    const { data } = await apiClient.get(`${USER_BASE_PATH}/${userId}`);
    return data;
  },

  create: async (payload: UserPayload): Promise<UserWithoutPassword | User> => {
    const { data } = await apiClient.post(USER_BASE_PATH, payload);
    return data;
  },

  update: async (
    userId: number,
    payload: UserPayload,
  ): Promise<UserWithoutPassword | User> => {
    const { data } = await apiClient.patch(
      `${USER_BASE_PATH}/${userId}`,
      payload,
    );
    return data;
  },

  remove: async (userId: number): Promise<void> => {
    await apiClient.delete(`${USER_BASE_PATH}/${userId}`);
  },
};
