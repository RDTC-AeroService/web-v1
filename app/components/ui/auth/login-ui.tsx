"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/app/router";

export default function LoginUI() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() && password.trim()) {
      router.push(pageRoutes.home.path);
      return;
    }

    setError("Please enter both email/username and password.");
  };

  return (
    <div className="auth-fade-in space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.14em] text-(--accent) uppercase">
          Welcome Back
        </p>
        <h2 className="text-3xl font-bold text-(--ink) sm:text-4xl">Login</h2>
        <p className="text-sm text-[rgba(11,31,47,0.7)]">
          Enter your credentials to continue.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-(--ink)">
            Email / Username
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your username or email"
            className="auth-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-(--ink)"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="auth-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="inline-flex items-center gap-2 text-[rgba(11,31,47,0.78)]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-(--line) text-(--accent)"
            />
            Remember me
          </label>
          <button
            type="button"
            className="font-semibold text-(--accent) hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="runway-btn-primary w-full rounded-xl py-3 text-sm font-semibold sm:text-base"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}