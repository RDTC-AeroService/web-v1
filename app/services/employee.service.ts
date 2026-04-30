import apiClient from "@/lib/axios";
import {
  DetailedEmployee,
  Employee,
  SeedEmployee,
} from "../shared/types/employee.type";
import { count } from "console";

const EMPLOYEE_BASE_PATH = "/employees";

export type SortOrder = "asc" | "desc";

export type EmployeeListQuery = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  employmentType?: string;
  positionId?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type EmployeePayload = Partial<SeedEmployee>;

const compactQuery = (query?: EmployeeListQuery): Record<string, unknown> => {
  if (!query) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(query).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );
};

export const employeeService = {
  list: async (
    query?: EmployeeListQuery,
  ): Promise<PaginatedResponse<Employee> | Employee[]> => {
    const { data } = await apiClient.get(EMPLOYEE_BASE_PATH, {
      params: compactQuery(query),
    });
    return data;
  },

  getById: async (employeeId: number): Promise<Employee | DetailedEmployee> => {
    const { data } = await apiClient.get(`${EMPLOYEE_BASE_PATH}/${employeeId}`);
    return data;
  },

  create: async (payload: EmployeePayload): Promise<Employee> => {
    const { data } = await apiClient.post(EMPLOYEE_BASE_PATH, payload);
    return data;
  },

  update: async (
    employeeId: number,
    payload: EmployeePayload,
  ): Promise<Employee> => {
    const { data } = await apiClient.patch(
      `${EMPLOYEE_BASE_PATH}/${employeeId}`,
      payload,
    );
    return data;
  },

  remove: async (employeeId: number): Promise<void> => {
    await apiClient.delete(`${EMPLOYEE_BASE_PATH}/${employeeId}`);
  },
};
