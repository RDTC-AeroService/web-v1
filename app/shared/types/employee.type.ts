import { DetailedPosition, Position } from './position.type';
import { User } from './user.type';

export interface Employee {
  employeeId: number;
  userId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  address: string | null;
  hireDate: Date;
  employmentType: string;
  positionId: number;
  status: string;
  createdAt: Date;
}

export interface SeedEmployee {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  address: string;
  hireDate: Date;
  employmentType: string;
  status: string;
  positionId: number;
  userId: number;
}

export interface DetailedEmployee {
  employee_id: number;
  user: User;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  address: string;
  hire_date: Date;
  employment_type: string;
  position: DetailedPosition;
  status: string;
  created_at: Date;
}
