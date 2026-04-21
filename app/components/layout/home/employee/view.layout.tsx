"use client";

import {
  ChevronLeft,
  BriefcaseBusiness,
  Phone,
  UserCircle2,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function ViewEmployeeLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const employee = {
    id: searchParams.get("employeeId") ?? "-",
    name: searchParams.get("name") ?? "Unknown Employee",
    position: searchParams.get("position") ?? "-",
    department: searchParams.get("department") ?? "-",
    employmentType: searchParams.get("employmentType") ?? "-",
    status: searchParams.get("status") ?? "-",
    phone: searchParams.get("phone") ?? "-",
    avatar: searchParams.get("avatar") ?? "",
    initials: searchParams.get("initials") ?? "-",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.push("/pages/home?section=employee")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f5ea8] text-white transition hover:bg-[#0c4f8f]"
          aria-label="Back to employee list"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-(--ink)">Employee Detail</h1>
          <p className="text-sm text-(--foreground)/70">
            View complete profile information for the selected employee.
          </p>
        </div>
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <div className="rounded-xl border border-(--line)/50 bg-(--line)/10 p-5">
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-sm">
              {employee.avatar ? (
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-200 text-xl font-bold text-slate-600">
                  {employee.initials}
                </div>
              )}
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-(--ink)">
                {employee.name}
              </h2>
              <p className="text-sm text-(--foreground)/70">
                {employee.position}
              </p>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                <BriefcaseBusiness className="h-4 w-4" />
                <span>{employee.department}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                <UserCircle2 className="h-4 w-4" />
                <span>{employee.employmentType}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                <Phone className="h-4 w-4" />
                <span>{employee.phone}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Employee ID
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.id}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Status
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.status}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Full Name
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.name}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Position
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.position}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Department
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.department}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Employment Type
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.employmentType}
              </p>
            </div>

            <div className="rounded-xl border border-(--line)/50 p-4 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                Contact Phone
              </p>
              <p className="mt-2 text-lg font-semibold text-(--ink)">
                {employee.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeLayout;
