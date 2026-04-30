"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 to-white p-6">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-rose-100 p-3 text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 3h.01M21 12A9 9 0 1112 3a9 9 0 019 9z"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Unauthorized
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              You don’t have permission to view this page. Please sign in with
              an account that has access.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-full h-full"
            src="https://cdn.dribbble.com/userupload/21854119/file/original-afecdbdc3c639f275a25e90887f397ea.gif"
            alt=""
          />
        </div>

        <div className="w-full h-auto flex">
          <Link
            href="/pages/auth"
            className="w-full rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500 text-center"
          >
            Sign in
          </Link>
        </div>
        <div className="mt-6 text-sm text-slate-500">
          <p>
            If you believe this is a mistake, contact your administrator or try
            signing in with a different account.
          </p>
        </div>
      </section>
    </main>
  );
}
