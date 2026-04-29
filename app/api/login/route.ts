import { NextRequest, NextResponse } from "next/server";
import { authCookieOptions, createJwtToken } from "@/lib/jwt";

const mockUser = {
  id: "1",
  email: "admin@example.com",
  password: "password123",
  name: "Admin User",
  role: "admin",
};

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string } = {};

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 },
    );
  }

  if (email !== mockUser.email || password !== mockUser.password) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const token = await createJwtToken({
    sub: mockUser.id,
    email: mockUser.email,
    name: mockUser.name,
    role: mockUser.role,
  });

  const response = NextResponse.json({
    message: "Login successful.",
    token,
    user: {
      id: mockUser.id,
      email: mockUser.email,
      name: mockUser.name,
      role: mockUser.role,
    },
  });

  response.cookies.set({
    ...authCookieOptions,
    name: "token",
    value: token,
    maxAge: 60 * 60,
  });

  return response;
}
