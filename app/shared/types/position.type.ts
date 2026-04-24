import { Department } from "./department.type";

export interface Position {
  position_id: number;
  position_name: string;
  department_id: number;
  base_salary: number;
}

export interface SeedPosition {
  positionName: string;
  departmentid: number;
  baseSalary: number;
}

export interface DetailedPosition {
  position_id: number;
  position_name: string;
  department: Department;
  base_salary: number;
}