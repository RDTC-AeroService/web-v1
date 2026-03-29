"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/app/router";

export default function MainLandingPage() {
  const router = useRouter();
  const LOAD_DURATION_MS = 5_000;
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startedAt = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const nextProgress = Math.min((elapsed / LOAD_DURATION_MS) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        setIsLoading(false);
        router.push(pageRoutes.auth.path);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [LOAD_DURATION_MS, router]);

  const metrics = [
    { label: "Flights Tracked", value: "1,480" },
    { label: "Payroll Precision", value: "99.9%" },
    { label: "Training Sessions", value: "212" },
  ];

  return (
    <main className="runway-page relative min-h-screen px-6 py-8 sm:px-10 sm:py-10 lg:px-12 overflow-auto">
      <div className="pointer-events-none runway-glow runway-glow-left" />
      <div className="pointer-events-none runway-glow runway-glow-right" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="runway-fade-up flex items-center justify-between rounded-2xl border border-(--line)/70 bg-white/70 px-5 py-3 backdrop-blur-sm">
          <div className="w-20 h-full inline-flex items-center gap-3 overflow-hidden">
            <img src="/RDTC.png" className="w-full h-full object-cover" alt="Aero Service Logo" />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,185,129,0.12)] px-3 py-1 text-xs font-semibold text-[rgba(6,95,70,0.95)]">
            <span className="h-2 w-2 rounded-full bg-[rgba(16,185,129,0.95)]" />
            Live Systems
          </p>
        </header>

        <div className="w-full grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:pt-20 h-full flex-1 flex-col lg:flex-row items-center pb-20">
          <div className="space-y-6">
            <p
              className="runway-chip runway-fade-up inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{ animationDelay: "80ms" }}
            >
              Your digital control tower for aviation teams
            </p>

            <h1
              className="runway-code runway-fade-up text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "160ms" }}
            >
              Welcome Aboard,
              <span className="block text-(--accent)">Aero Service</span>
            </h1>

            <p
              className="runway-fade-up max-w-2xl text-base/7 text-[rgba(11,31,47,0.86)] sm:text-lg"
              style={{ animationDelay: "230ms" }}
            >
              Coordinate people, payroll, and training from one command panel
              designed for fast-moving flight operations.
            </p>

            <div
              className="runway-fade-up flex flex-wrap gap-3"
              style={{ animationDelay: "310ms" }}
            >
              {isLoading && (
                <div className="w-full">
                  <div
                    className="h-5 w-full overflow-hidden rounded-2xl border border-gray-400 bg-white/70 backdrop-blur-sm"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    aria-label="Landing page loading progress"
                  >
                    <div
                      className="h-full rounded-2xl bg-linear-to-r from-blue-500 to-blue-200 transition-[width] duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-semibold tracking-[0.14em] text-[rgba(11,31,47,0.62)]">
                    Loading {Math.round(progress)}%
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="runway-panel runway-fade-up rounded-3xl p-5 sm:p-6">
              <h2 className="runway-code text-lg font-bold">
                Operations Snapshot
              </h2>
              <div className="mt-4 space-y-3">
                {metrics.map((item, index) => (
                  <div
                    key={item.label}
                    className="runway-stat runway-fade-up rounded-xl p-4"
                    style={{ animationDelay: `${450 + index * 80}ms` }}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-[rgba(11,31,47,0.6)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-(--ink)">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
