import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="auth-page flex justify-center items-center relative min-h-screen overflow-hidden px-4 py-8 sm:px-8 md:py-12">
      <div className="auth-orb auth-orb-left pointer-events-none" />
      <div className="auth-orb auth-orb-right pointer-events-none" />

      <section className="auth-shell auth-rise mx-auto grid max-w-6xl h-full overflow-hidden rounded-3xl border border-(--line)/80 bg-white/70 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="auth-brand-panel relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="auth-grid-overlay pointer-events-none absolute inset-0" />
          <div className="w-10 h-5 scale-500 ml-10 relative z-10 lg:hidden">
            <img src="/RDTC.png" className="w-full h-full object-cover" alt="Aero Service Logo" />
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
                width={130}
                height={130}
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
          <div className="auth-fade-in space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.14em] text-(--accent) uppercase">
                Welcome Back
              </p>
              <h2 className="text-3xl font-bold text-(--ink) sm:text-4xl">
                Login
              </h2>
              <p className="text-sm text-[rgba(11,31,47,0.7)]">
                Enter your credentials to continue.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-(--ink)"
                >
                  Email / Username
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your username or email"
                  className="auth-input"
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
                className="runway-btn-primary w-full rounded-xl py-3 text-sm font-semibold sm:text-base"
              >
                Sign In
              </button>
            </form>

            {/* <p className="text-sm text-[rgba(11,31,47,0.78)]">
              Need to go back?{" "}
              <Link
                href="/"
                className="font-semibold text-(--accent) hover:underline"
              >
                Return to landing page
              </Link>
            </p> */}
          </div>
        </div>
      </section>
    </main>
  );
}
