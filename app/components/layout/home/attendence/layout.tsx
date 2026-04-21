"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  FileUp,
  Filter,
  MoreHorizontal,
  PencilLine,
  Plus,
  Search,
  Upload,
  UserCheck,
  UserMinus,
  Users,
} from "lucide-react";

type AttendanceStatus = "Present" | "Late" | "Leave" | "Absent";

type AttendanceRow = {
  id: string;
  name: string;
  department: string;
  date: string;
  clockIn: string;
  clockOut: string;
  workHours: string;
  status: AttendanceStatus;
  avatar: string;
};

const summaryCards = [
  {
    label: "Present Today",
    value: "46",
    suffix: "Employees",
    icon: <UserCheck className="h-5 w-5" />,
    tone: "blue",
  },
  {
    label: "Late Today",
    value: "5",
    suffix: "Employees",
    icon: <Clock3 className="h-5 w-5" />,
    tone: "amber",
  },
  {
    label: "Absent",
    value: "3",
    suffix: "Employees",
    icon: <UserMinus className="h-5 w-5" />,
    tone: "rose",
  },
  {
    label: "Overtime",
    value: "8",
    suffix: "Employees",
    icon: <Clock3 className="h-5 w-5" />,
    tone: "emerald",
  },
] as const;

const attendanceRecords: AttendanceRow[] = [
  {
    id: "ENP001",
    name: "John Doe",
    department: "Flight Ops",
    date: "03 Mar",
    clockIn: "09:03",
    clockOut: "18:10",
    workHours: "09:07",
    status: "Present",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ENP002",
    name: "Jane Doe",
    department: "Operations",
    date: "03 Mar",
    clockIn: "09:03",
    clockOut: "18:00",
    workHours: "08:57",
    status: "Late",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ENP003",
    name: "Alex White",
    department: "Training",
    date: "05 Mar",
    clockIn: "09:05",
    clockOut: "18:20",
    workHours: "09:15",
    status: "Absent",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ENP004",
    name: "Sen-Biad",
    department: "Environments",
    date: "03 Mar",
    clockIn: "19:05",
    clockOut: "19:20",
    workHours: "00:15",
    status: "Leave",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "ENP005",
    name: "Bon Wikon",
    department: "Flight Ops",
    date: "03 Mar",
    clockIn: "10:55",
    clockOut: "19:10",
    workHours: "08:15",
    status: "Late",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
  },
];

const statusTone = {
  Present: "bg-emerald-100 text-emerald-700",
  Late: "bg-amber-100 text-amber-700",
  Leave: "bg-blue-100 text-blue-700",
  Absent: "bg-rose-100 text-rose-700",
} as const;

const statTone = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
} as const;

function AttendanceLayout() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment] = useState("All Departments");
  const [selectedStatus] = useState<AttendanceStatus | "All">("All");

  const filteredRecords = useMemo(() => {
    return attendanceRecords.filter((record) => {
      const matchesSearch = [
        record.id,
        record.name,
        record.department,
        record.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All Departments" ||
        record.department === selectedDepartment;

      const matchesStatus =
        selectedStatus === "All" || record.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [searchTerm, selectedDepartment, selectedStatus]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-(--ink)">Attendance</h1>
          <p className="mt-2 max-w-2xl text-sm text-(--foreground)/70">
            Track daily attendance, manage manual entries, and review recent
            logs from one consistent panel.
          </p>
        </div>

        <button
          type="button"
          className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-(--ink)"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="runway-stat flex items-center gap-4 rounded-2xl px-5 py-4"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border ${statTone[card.tone]}`}
            >
              {card.icon}
            </div>

            <div>
              <p className="text-sm font-semibold text-(--ink)">{card.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-(--ink)">
                  {card.value}
                </span>
                <span className="text-sm text-(--foreground)/70">
                  {card.suffix}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-(--line)/60 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-(--ink)">
              Manual Attendance Entry
            </h2>
            <p className="mt-1 text-sm text-(--foreground)/65">
              Log a single attendance record for the selected employee.
            </p>
          </div>

          <button
            type="button"
            title="More attendance actions"
            aria-label="More attendance actions"
            className="hidden rounded-lg border border-(--line)/60 bg-white px-3 py-2 text-sm font-medium text-(--ink) shadow-sm transition hover:bg-white/90 md:inline-flex"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <label className="lg:col-span-4">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Employee
            </span>
            <div className="flex items-center rounded-xl border border-(--line)/60 bg-white px-3 py-2.5 shadow-[0_10px_22px_-20px_rgba(16,36,58,0.34)]">
              <span className="text-sm text-(--foreground)/50">
                Select employee
              </span>
              <ChevronDown className="ml-auto h-4 w-4 text-(--foreground)/55" />
            </div>
          </label>

          <label className="lg:col-span-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Date
            </span>
            <div className="flex items-center rounded-xl border border-(--line)/60 bg-white px-3 py-2.5 shadow-[0_10px_22px_-20px_rgba(16,36,58,0.34)]">
              <span className="text-sm font-medium text-(--ink)">
                05/03/2026
              </span>
              <Clock3 className="ml-auto h-4 w-4 text-(--foreground)/55" />
            </div>
          </label>

          <label className="lg:col-span-5">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Work Type
            </span>
            <div className="flex items-center rounded-xl border border-(--line)/60 bg-white px-3 py-2.5 shadow-[0_10px_22px_-20px_rgba(16,36,58,0.34)]">
              <span className="text-sm font-medium text-(--ink)">
                Regular Work Day
              </span>
              <ChevronDown className="ml-auto h-4 w-4 text-(--foreground)/55" />
            </div>
          </label>

          <label className="lg:col-span-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Scheduled In
            </span>
            <input
              type="text"
              defaultValue="09:00"
              className="auth-input bg-white px-3 py-2.5"
            />
          </label>

          <label className="lg:col-span-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Scheduled Out
            </span>
            <input
              type="text"
              defaultValue="19:00"
              className="auth-input bg-white px-3 py-2.5"
            />
          </label>

          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Actual In
            </span>
            <input
              type="text"
              defaultValue="09:05"
              className="auth-input bg-white px-3 py-2.5"
            />
          </label>

          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Actual Out
            </span>
            <input
              type="text"
              defaultValue="19:20"
              className="auth-input bg-white px-3 py-2.5"
            />
          </label>

          <label className="lg:col-span-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
              Overtime Notes
            </span>
            <div className="flex items-center gap-3 rounded-xl border border-(--line)/60 bg-white px-3 py-2.5 shadow-[0_10px_22px_-20px_rgba(16,36,58,0.34)]">
              <Search className="h-4 w-4 text-(--foreground)/45" />
              <input
                type="text"
                placeholder="Notes"
                className="w-full bg-transparent text-sm outline-none placeholder:text-(--foreground)/45"
              />
              <span className="text-sm font-medium text-(--foreground)/60">
                +1h 165m
              </span>
            </div>
          </label>

          <div className="flex items-end lg:col-span-2">
            <button
              type="button"
              className="runway-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              Save Log
            </button>
          </div>
        </div>
      </div>

      <div className="runway-panel rounded-2xl border border-emerald-200 bg-emerald-50/45 p-4 md:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-bold text-(--ink)">
              Bulk Attendance Upload
            </h3>
            <p className="mt-1 text-sm text-(--foreground)/65">
              Upload a CSV sheet for fast attendance imports.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-(--ink)"
            >
              <FileUp className="h-4 w-4" />
              Download CSV Template
            </button>

            <label className="flex min-w-65 flex-1 items-center gap-3 rounded-xl border border-dashed border-emerald-400 bg-white/85 px-3 py-2.5 shadow-sm">
              <Upload className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-(--foreground)/65">
                Choose File
              </span>
              <span className="text-sm text-(--foreground)/45">
                no file selected
              </span>
            </label>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Upload Sheet
            </button>
          </div>
        </div>
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <div className="flex flex-col gap-4 border-b border-(--line)/60 pb-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-(--ink)">
              Attendance Records
            </h2>
            <p className="mt-1 text-sm text-(--foreground)/65">
              Review daily records, status, and working time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              title="Rebolt attendance view"
              aria-label="Rebolt attendance view"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
            >
              <Clock3 className="h-4 w-4" />
              Rebolt
            </button>
            <button
              type="button"
              title="Previous page"
              aria-label="Previous page"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Next page"
              aria-label="Next page"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink)"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-(--line)/60 bg-white px-3 py-2.5">
              <Search className="h-4 w-4 text-(--foreground)/45" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                type="text"
                placeholder="Search employee"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-(--foreground)/45 sm:w-48"
              />
            </div>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-(--ink)"
            >
              <Filter className="h-4 w-4" />
              All Departments
              <ChevronDown className="h-4 w-4 text-(--foreground)/55" />
            </button>

            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-(--ink)"
            >
              <span className="rounded-md border border-(--line)/50 bg-white px-2 py-0.5 text-xs font-semibold text-(--ink)">
                01/03/2026
              </span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-(--line)/60 bg-white/75 p-1.5">
            {(["Present", "Late", "Leave", "Absent"] as const).map((status) => (
              <button
                key={status}
                type="button"
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  status === "Present"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-(--foreground)/70 hover:bg-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-(--line)/50 text-xs font-semibold uppercase tracking-wide text-(--foreground)/55">
                <th className="px-3 py-4">Employee ID</th>
                <th className="px-3 py-4">Employee Name</th>
                <th className="px-3 py-4">Department</th>
                <th className="px-3 py-4">Date</th>
                <th className="px-3 py-4">Clock In</th>
                <th className="px-3 py-4">Clock Out</th>
                <th className="px-3 py-4">Work Hours</th>
                <th className="px-3 py-4">Status</th>
                <th className="px-3 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-white/70"
                >
                  <td className="px-3 py-4 font-semibold">
                    <div className="flex items-center gap-3">
                      <img
                        src={record.avatar}
                        alt={record.name}
                        className="h-10 w-10 rounded-full border border-white object-cover shadow-sm"
                      />
                      <span>{record.id}</span>
                    </div>
                  </td>
                  <td className="px-3 py-4 font-medium">{record.name}</td>
                  <td className="px-3 py-4">{record.department}</td>
                  <td className="px-3 py-4">{record.date}</td>
                  <td className="px-3 py-4">{record.clockIn}</td>
                  <td className="px-3 py-4">{record.clockOut}</td>
                  <td className="px-3 py-4">{record.workHours}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusTone[record.status]}`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        className="runway-btn-secondary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-(--ink)"
                      >
                        <PencilLine className="h-4 w-4" />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="rounded-lg border border-(--line)/60 bg-white p-2 transition hover:bg-white/90"
                        aria-label="More actions"
                      >
                        <MoreHorizontal className="h-4 w-4 text-(--foreground)/60" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-(--line)/60 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-sm text-(--foreground)/70">
            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-lg px-3 py-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button className="rounded-lg bg-(--accent) px-3 py-2 text-sm font-semibold text-white shadow-sm">
              1
            </button>
            <button className="runway-btn-secondary rounded-lg px-3 py-2 text-sm font-semibold text-(--ink)">
              2
            </button>
            <button className="runway-btn-secondary rounded-lg px-3 py-2 text-sm font-semibold text-(--ink)">
              4
            </button>
            <button
              type="button"
              className="runway-btn-secondary inline-flex items-center gap-2 rounded-lg px-3 py-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-(--foreground)/70">
            <button
              type="button"
              title="Previous attendance page"
              aria-label="Previous attendance page"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-2 transition hover:bg-white/90"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="rounded-lg bg-(--accent) px-3 py-2 text-sm font-semibold text-white shadow-sm">
              1
            </button>
            <button className="rounded-lg border border-(--line)/60 bg-white px-3 py-2 transition hover:bg-white/90">
              2
            </button>
            <button className="rounded-lg border border-(--line)/60 bg-white px-3 py-2 transition hover:bg-white/90">
              3
            </button>
            <button
              type="button"
              title="Next attendance page"
              aria-label="Next attendance page"
              className="rounded-lg border border-(--line)/60 bg-white px-3 py-2 transition hover:bg-white/90"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceLayout;
