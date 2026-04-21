import { ReactNode } from "react";
import Image from "next/image";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="auth-page flex justify-center items-center relative min-h-screen overflow-hidden px-4 py-8 sm:px-8 md:py-12">
      <div className="auth-orb auth-orb-left pointer-events-none" />
      <div className="auth-orb auth-orb-right pointer-events-none" />

      <section className="auth-shell auth-rise mx-auto grid max-w-6xl h-full overflow-hidden rounded-3xl border border-(--line)/80 bg-white/70 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="auth-brand-panel relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="auth-grid-overlay pointer-events-none absolute inset-0" />
          <div className="w-10 h-5 scale-300 ml-10 relative z-10 lg:hidden">
            <img
              src="/RDTC.png"
              className="w-full h-full object-contain"
              alt="Aero Service Logo"
            />
          </div>
          <div className="relative z-10 lg:flex h-full flex-col justify-between gap-8 hidden">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
                AERO SERVICE AUTH
              </div>

              <Image
                src="/RDTC.png"
                alt="Aero Service Logo"
                width={100}
                height={100}
                priority
                className="h-16 w-auto sm:h-20"
              />

              <h1 className="runway-code text-3xl leading-tight pr-10 font-bold text-white sm:text-4xl lg:text-5xl">
                Secure Crew Access
              </h1>

              <p className="max-w-md text-sm/6 text-blue-100 sm:text-base/7">
                Sign in to manage flight operations, payroll, and training from
                one trusted command center.
              </p>
            </div>
          </div>
        </aside>

        <div className="auth-form-wrap px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          {children}
        </div>
      </section>
    </main>
  );
};