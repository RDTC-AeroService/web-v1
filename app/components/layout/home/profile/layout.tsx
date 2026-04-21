import {
  BadgeCheck,
  GraduationCap,
  IdCard,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const tabItems = [
  { label: "Personal Information", active: true },
  { label: "Skills & Qualifications", active: false },
  { label: "Edit Personal Information", active: false },
] as const;

function ProfileLayout() {
  return (
    <div className="space-y-6 rounded-2xl bg-white/80 p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap items-center gap-2 p-2">
        {tabItems.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              tab.active
                ? "bg-(--accent) text-white"
                : "text-(--ink) hover:bg-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border-t-2 border-(--accent)/55" />

      <div className="overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-[240px_1fr]">
          <div className="rounded-xl border border-(--line)/70 bg-linear-to-br from-blue-500 to-indigo-500 p-3 shadow-[0_16px_24px_-20px_rgba(29,78,216,0.8)]">
            <div className="flex h-56 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white/85">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full border border-white/45 bg-white/20">
                  <UserCog className="h-8 w-8" />
                </div>
                <p className="text-sm font-semibold">Profile Photo</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-black tracking-tight text-(--ink)">
              JOHN SMITHEST
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-lg font-semibold text-blue-600">
                Pilot . EP00001
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                <BadgeCheck className="h-3.5 w-3.5" />
                Active
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-y-2 text-lg text-(--ink) sm:grid-cols-2 sm:gap-x-8">
              <p>
                <span className="font-bold">Gender:</span> Male
              </p>
              <p>
                <span className="font-bold">Date of Birth:</span> 11-11-2000
              </p>
              <p>
                <span className="font-bold">Place of Birth:</span> PP
              </p>
              <p>
                <span className="font-bold">Marital Status:</span> Single
              </p>
              <p>
                <span className="font-bold">Position:</span> Pilot
              </p>
              <p>
                <span className="font-bold">Phone Number:</span> +885 11 111
                1111
              </p>
              <p className="sm:col-span-2">
                <span className="font-bold">Email:</span> johnsmite@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl p-4 md:p-6">
        <h2 className="text-3xl font-bold text-(--ink)">
          Skills and qualification
        </h2>

        <div className="mt-5 space-y-6">
          <article className="border-b border-(--line)/70 pb-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-(--ink)">
                  Education
                </h3>
                <ul className="mt-2 text-lg font-medium text-(--ink)">
                  <li>Bachelor&apos;s in Aviation Science</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="border-b border-(--line)/70 pb-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                <IdCard className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-(--ink)">
                  Certification
                </h3>
                <ul className="mt-2 text-lg font-medium text-(--ink)">
                  <li>ATPL . BOEING 737</li>
                </ul>
              </div>
            </div>
          </article>

          <article>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold capitalize text-(--ink)">
                  skill
                </h3>
                <ul className="mt-2 text-lg font-medium text-(--ink)">
                  <li>Team management</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default ProfileLayout;
