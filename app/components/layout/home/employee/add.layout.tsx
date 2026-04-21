"use client";

import { ChevronLeft, ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";

function AddEmployeeLayout() {
  const router = useRouter();

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
        <h1 className="text-3xl font-bold text-(--ink)">Register Employee</h1>
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <h2 className="text-2xl font-bold text-(--ink)">
          Register New Employee
        </h2>
        <div className="mt-5 border-t border-(--foreground)/10 pt-5">
          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[140px_1fr]">
              <button
                type="button"
                className="flex h-33 w-28 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-(--foreground)/20 bg-background text-(--foreground)/65 transition hover:border-(--foreground)/30"
              >
                <ImagePlus className="h-7 w-7" />
                <span className="text-sm font-medium">Upload Photo</span>
              </button>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="block text-sm font-semibold text-(--ink)">
                    Employee ID
                  </span>
                  <input
                    type="text"
                    defaultValue="EMP-0001"
                    className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                  />
                </label>

                <label className="space-y-2">
                  <span className="block text-sm font-semibold text-(--ink)">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="block text-sm font-semibold text-(--ink)">
                  Department
                </span>
                <select className="w-full rounded-lg border border-(--foreground)/15 bg-white px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]">
                  <option>Select Department</option>
                  <option>Flight Operations</option>
                  <option>Cabin Crew</option>
                  <option>Finance</option>
                  <option>HR</option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="block text-sm font-semibold text-(--ink)">
                  Position
                </span>
                <select className="w-full rounded-lg border border-(--foreground)/15 bg-white px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]">
                  <option>Select Position</option>
                  <option>Pilot</option>
                  <option>Flight Attendant</option>
                  <option>Engineer</option>
                  <option>Accountant</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold text-(--ink)">
                  Employment Type
                </legend>
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="employmentType" defaultChecked />
                    <span>Full-Time</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="employmentType" />
                    <span>Part-Time</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="employmentType" />
                    <span>Contract</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold text-(--ink)">
                  Status
                </legend>
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="status" defaultChecked />
                    <span>Active</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="status" />
                    <span>Inactive</span>
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <label className="space-y-2 md:col-span-1">
                <span className="block text-sm font-semibold text-(--ink)">
                  Basic Salary (USD)
                </span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                />
              </label>

              <label className="space-y-2 md:col-span-1">
                <span className="block text-sm font-semibold text-(--ink)">
                  Standard Workday
                </span>
                <input
                  type="number"
                  min="0"
                  defaultValue="21"
                  className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                />
              </label>

              <label className="space-y-2 md:col-span-1">
                <span className="block text-sm font-semibold text-(--ink)">
                  Extra Days/Month
                </span>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="block text-sm font-semibold text-(--ink)">
                  Start Date
                </span>
                <input
                  type="date"
                  className="w-full rounded-lg border border-(--foreground)/15 px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]"
                />
              </label>

              <label className="space-y-2">
                <span className="block text-sm font-semibold text-(--ink)">
                  Payroll Status
                </span>
                <select className="w-full rounded-lg border border-(--foreground)/15 bg-white px-4 py-2.5 text-sm outline-none ring-0 transition focus:border-[#0f5ea8]">
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Suspended</option>
                </select>
              </label>
            </div>

            <div className="flex justify-end border-t border-(--foreground)/10 pt-4">
              <button
                type="submit"
                className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-[#2f7cf7] bg-[#eef5ff] p-4 md:p-6">
        <h3 className="text-lg font-bold text-(--ink)">Bulk Employee Import</h3>
        <p className="mt-2 text-sm text-(--foreground)/75">
          Upload CSV with columns: id, name, salary, days, hrs
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="file"
            accept=".csv"
            aria-label="Upload employee CSV file"
            className="block w-full rounded-lg border border-(--foreground)/15 bg-white px-3 py-2 text-sm"
          />
          <button
            type="button"
            className="rounded-lg border border-(--foreground)/20 bg-white px-4 py-2 text-sm font-medium text-(--ink) transition hover:bg-slate-50"
          >
            Process Import
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeLayout;
