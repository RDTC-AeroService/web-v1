import { UserRole } from "../enums/role.enum";
import { UserStatus } from "../enums/status.enum";

export interface User {
  userId: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  role: UserRole;
  status: UserStatus;
}

export interface UserWithoutPassword {
  userId: number;
  username: string;
  email: string;
  createdAt: Date;
  role: UserRole;
  status: UserStatus;
}

export interface AuthInput {
  username: string;
  password: string;
}

export interface SignInData {
  userId: number;
  username: string;
  role: UserRole;
}

export type AuthResult = {
  accessToken: string;
  userId: number;
  username: string;
  role: UserRole;
  tokenType: string;
  issuedAt: number;
};

export type SeedUser = {
  username: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  password: string;
};
