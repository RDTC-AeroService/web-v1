"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MoreHorizontal,
  Search,
  UserPlus,
  BriefcaseBusiness,
  CircleCheckBig,
  Clock3,
  UserX,
} from "lucide-react";

type EmployeeStatus = "Active" | "On Leave" | "Inactive";
type EmploymentType = "Full-Time" | "Part-Time" | "Contract";

type EmployeeRow = {
  id: string;
  name: string;
  position: string;
  department: string;
  employmentType: EmploymentType;
  status: EmployeeStatus;
  phone: string;
  avatar: string;
  initials: string;
};

const stats = [
  {
    label: "Total Employees",
    value: "350",
    tone: "blue",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
  },
  {
    label: "Full-Time",
    value: "275",
    tone: "emerald",
    icon: <CircleCheckBig className="h-5 w-5" />,
  },
  {
    label: "On Leave",
    value: "8",
    tone: "amber",
    icon: <Clock3 className="h-5 w-5" />,
  },
  {
    label: "Inactive",
    value: "15",
    tone: "rose",
    icon: <UserX className="h-5 w-5" />,
  },
] as const;

const employees: EmployeeRow[] = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Pilot",
    department: "Flight Operations",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2001",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    initials: "JS",
  },
  {
    id: "EMP002",
    name: "Jane Doe",
    position: "Flight Attendant",
    department: "Cabin Crew",
    employmentType: "Full-Time",
    status: "On Leave",
    phone: "(555) 013-2002",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    initials: "JD",
  },
  {
    id: "EMP003",
    name: "Robert Johnson",
    position: "Engineer",
    department: "Maintenance",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2003",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    initials: "RJ",
  },
  {
    id: "EMP004",
    name: "Alice White",
    position: "HR Manager",
    department: "HR",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2004",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    initials: "AW",
  },
  {
    id: "EMP005",
    name: "Ben Wilson",
    position: "Cleaner",
    department: "Environments",
    employmentType: "Part-Time",
    status: "Active",
    phone: "(555) 013-2005",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    initials: "BW",
  },
  {
    id: "EMP006",
    name: "Lisa Park",
    position: "Accountant",
    department: "Finance",
    employmentType: "Part-Time",
    status: "Inactive",
    phone: "(555) 013-2006",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    initials: "LP",
  },
  {
    id: "EMP007",
    name: "Alex Brown",
    position: "Pilot",
    department: "Flight Operations",
    employmentType: "Contract",
    status: "Active",
    phone: "(555) 013-2007",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    initials: "AB",
  },
  {
    id: "EMP008",
    name: "Michael Lee",
    position: "Instructor",
    department: "Training",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2008",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=160&q=80",
    initials: "ML",
  },
];

const employmentFilterOptions: Array<"All Employment Types" | EmploymentType> =
  ["All Employment Types", "Full-Time", "Part-Time", "Contract"];

const statusTone = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Inactive: "bg-slate-200 text-slate-600",
} as const;

const statTone = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
} as const;

function EmployeeLayout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [employmentFilter] = useState<"All Employment Types" | EmploymentType>(
    "All Employment Types",
  );

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch = [
        employee.id,
        employee.name,
        employee.position,
        employee.department,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesEmployment =
        employmentFilter === "All Employment Types" ||
        employee.employmentType === employmentFilter;

      return matchesSearch && matchesEmployment;
    });
  }, [employmentFilter, searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-(--ink)">Employee</h1>
          <p className="mt-2 max-w-2xl text-sm text-(--foreground)/70">
            Manage your crew records, staffing levels, and employee status from
            one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="runway-btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
          >
            <UserPlus className="h-4 w-4" />
            Add Employee
          </button>
          <button
            type="button"
            className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-(--ink)"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="runway-stat flex items-center justify-between rounded-2xl px-5 py-4 shadow-[0_10px_24px_-20px_rgba(16,36,58,0.38)]"
          >
            <div>
              <p className="text-sm font-medium text-(--foreground)/70">
                {stat.label}
              </p>
              <p className="mt-1 text-3xl font-semibold text-(--ink)">
                {stat.value}
              </p>
            </div>
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full border ${statTone[stat.tone]}`}
            >
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <div className="flex flex-col gap-4 border-b border-(--line)/60 pb-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-(--ink)">Employees</h2>
            <button
              type="button"
              className="rounded-full border border-(--line)/70 p-2 text-(--foreground)/70 transition hover:bg-white hover:text-(--ink) lg:hidden"
              aria-label="More employee options"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-(--line)/60 bg-white/75 px-3 py-2.5 shadow-[0_10px_22px_-20px_rgba(16,36,58,0.34)]">
              <Search className="h-4 w-4 text-(--foreground)/50" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                type="text"
                placeholder="Search employee.."
                className="w-44 bg-transparent text-sm outline-none placeholder:text-(--foreground)/45 sm:w-56"
              />
            </div>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-(--ink)"
            >
              {employmentFilter}
              <ChevronDown className="h-4 w-4 text-(--foreground)/55" />
            </button>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-(--ink)"
            >
              Staff: Time
              <ChevronDown className="h-4 w-4 text-(--foreground)/55" />
            </button>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
              aria-label="Clear filters"
            >
              ×
            </button>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
              aria-label="More filters"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-(--line)/50 py-3 text-sm text-(--foreground)/70">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-white"
          >
            <span className="font-medium text-(--ink)">↑ -850</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-2.5 py-1.5 transition hover:bg-white/90"
            >
              <span className="text-xs font-semibold text-(--ink)">≡</span>
            </button>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <button
              type="button"
              className="rounded-lg px-2 py-1 transition hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              type="button"
              className="rounded-lg bg-(--accent) px-3 py-1.5 font-semibold text-white shadow-sm"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-lg px-3 py-1.5 font-medium text-(--ink) transition hover:bg-white"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-lg px-3 py-1.5 font-medium text-(--ink) transition hover:bg-white"
            >
              4
            </button>
            <button
              type="button"
              className="rounded-lg px-2 py-1 transition hover:bg-white"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-(--line)/50 text-xs font-semibold uppercase tracking-wide text-(--foreground)/55">
                <th className="px-3 py-4">Employee ID</th>
                <th className="px-3 py-4">Name</th>
                <th className="px-3 py-4">Position</th>
                <th className="px-3 py-4">Department</th>
                <th className="px-3 py-4">Employment Type</th>
                <th className="px-3 py-4">Status</th>
                <th className="px-3 py-4">Phone</th>
                <th className="px-3 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-white/70"
                >
                  <td className="px-3 py-4 font-semibold text-(--ink)">
                    <div className="flex items-center gap-3">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="h-11 w-11 rounded-full border border-white object-cover shadow-sm"
                      />
                      <div>
                        <p>{employee.id}</p>
                        <p className="text-xs font-medium text-(--foreground)/55">
                          {employee.initials}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 font-medium">{employee.name}</td>
                  <td className="px-3 py-4">{employee.position}</td>
                  <td className="px-3 py-4">{employee.department}</td>
                  <td className="px-3 py-4">{employee.employmentType}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusTone[employee.status]}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-(--foreground)/80">
                    {employee.phone}
                  </td>
                  <td className="px-3 py-4 text-right">
                    <button
                      type="button"
                      className="runway-btn-secondary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-(--ink)"
                    >
                      View
                      <ChevronDown className="h-4 w-4 text-(--foreground)/55" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-(--line)/60 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-sm text-(--foreground)/70">
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-lg bg-(--accent) px-3 py-1.5 font-semibold text-white shadow-sm"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              3
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              Next
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-(--foreground)/70">
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-lg bg-(--accent) px-3 py-1.5 font-semibold text-white shadow-sm"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              2
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              3
            </button>
            <button
              type="button"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90"
            >
              Next
            </button>
          </div>
        </div>

        {filteredEmployees.length === 0 ? (
          <div className="py-12 text-center text-sm text-(--foreground)/65">
            No employees match your current search.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EmployeeLayout;
