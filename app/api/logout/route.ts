import { NextRequest, NextResponse } from "next/server";
import { authCookieOptions } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url));

  // Clearing the cookie removes the browser session immediately.
  response.cookies.set({
    ...authCookieOptions,
    name: "token",
    value: "",
    maxAge: 0,
  });

  return response;
}
