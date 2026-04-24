import { UserRole, UserStatus } from 'src/generated/prisma/enums';

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
};

export type SeedUser = {
  username: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  password: string;
};
