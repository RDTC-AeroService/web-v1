"use client";

import { Bell, ChevronDown, Search, Sparkles } from "lucide-react";

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,250,255,0.8))] backdrop-blur-xl shadow-[0_18px_38px_-34px_rgba(16,36,58,0.48)]">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-0 flex-1 basis-full sm:basis-auto md:w-full xl:max-w-xl 2xl:max-w-2xl border border-gray-300 bg-white/80 rounded-2xl shadow-[0_14px_28px_-24px_rgba(16,36,58,0.5)] transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-200/60">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground)/45" />
            <input
              type="text"
              placeholder="Search crews, reports, payroll..."
              className="w-full rounded-2xl border border-white/80 bg-white/80 py-3 pl-11 pr-4 text-sm text-(--ink) shadow-[0_14px_28px_-24px_rgba(16,36,58,0.5)] outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-200/60"
            />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-(--foreground)/70 shadow-[0_14px_28px_-24px_rgba(16,36,58,0.5)] transition hover:-translate-y-0.5 hover:text-(--accent) hover:shadow-[0_18px_30px_-26px_rgba(37,99,235,0.6)]"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500" />
            </button>

            <button
              type="button"
              className="flex min-w-0 items-center gap-2 rounded-2xl border border-white/80 bg-white/80 px-2.5 py-2.5 text-left shadow-[0_14px_28px_-24px_rgba(16,36,58,0.5)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white sm:gap-3 sm:px-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                JK
              </div>

              <div className="hidden min-w-0 md:block">
                <p className="truncate text-sm font-semibold text-(--ink)">
                  John Kh
                </p>
                <p className="truncate text-xs text-(--foreground)/60">
                  EP0001
                </p>
              </div>

              <ChevronDown className="hidden h-4 w-4 text-(--foreground)/45 md:block" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
