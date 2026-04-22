"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/app/router";
import { authService } from "@/app/services/auth/auth.service";

type LoginUIProps = {
  onErrorChange?: (message: string) => void;
};

export default function LoginUI({ onErrorChange }: LoginUIProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setLoginError = (message: string) => {
    setError(message);
    onErrorChange?.(message);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");

    if (!email.trim() || !password.trim()) {
      setLoginError("Please enter both email/username and password.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await authService.login(email.trim(), password);
      const token = response?.access_token ?? response?.token;

      if (!token) {
        setLoginError("Login failed: token was not returned by the server.");
        return;
      }

      localStorage.setItem("token", token);
      setLoginError("");
      router.push(pageRoutes.home.path);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        const message =
          (err.response?.data as { message?: string })?.message ?? "";

        if (status === 401) {
          setLoginError("Invalid email/username or password.");
          return;
        }

        if (status === 400) {
          setLoginError(message || "Please check your input and try again.");
          return;
        }

        setLoginError(
          message || "Unable to login right now. Please try again.",
        );
        return;
      }

      setLoginError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
          className="runway-btn-primary w-full rounded-xl py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
