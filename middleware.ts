import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith("/pages/home");
  const isLoginPage = pathname === "/pages/auth";

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/pages/unauthorized", request.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/pages/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pages/home/:path*", "/pages/auth"],
};