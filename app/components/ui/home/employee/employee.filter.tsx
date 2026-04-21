"use client";

import { ChevronDown, Filter, MoreHorizontal, Search } from "lucide-react";
import { EmployeeStatus, EmploymentType } from "./employee.interfaces";

type EmployeeFilterType = "All Times" | EmploymentType;
type PositionFilterType = "All Positions" | string;
type StatusFilterType = "All Statuses" | EmployeeStatus;

type EmployeeFilterProps = {
  searchTerm: string;
  employmentFilter: EmployeeFilterType;
  positionFilter: PositionFilterType;
  statusFilter: StatusFilterType;
  positionOptions: string[];
  statusOptions: EmployeeStatus[];
  onSearchTermChange: (value: string) => void;
  onEmploymentFilterChange: (value: EmployeeFilterType) => void;
  onPositionFilterChange: (value: PositionFilterType) => void;
  onStatusFilterChange: (value: StatusFilterType) => void;
  onClearFilters: () => void;
};

const employmentFilterOptions: EmployeeFilterType[] = [
  "All Times",
  "Full-Time",
  "Part-Time",
  "Contract",
];

export default function EmployeeFilter({
  searchTerm,
  employmentFilter,
  positionFilter,
  statusFilter,
  positionOptions,
  statusOptions,
  onSearchTermChange,
  onEmploymentFilterChange,
  onPositionFilterChange,
  onStatusFilterChange,
  onClearFilters,
}: EmployeeFilterProps) {
  const handleEmploymentFilterChange = (value: string) => {
    switch (value) {
      case "All Times":
      case "Full-Time":
      case "Part-Time":
      case "Contract":
        onEmploymentFilterChange(value);
        break;
      default:
        onEmploymentFilterChange("All Times");
    }
  };

  return (
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
            onChange={(event) => onSearchTermChange(event.target.value)}
            type="text"
            placeholder="Search employee.."
            className="w-44 bg-transparent text-sm outline-none placeholder:text-(--foreground)/45 sm:w-56"
          />
        </div>

        <div className="relative">
          <select
            name="employmentType"
            id="employmentType"
            value={employmentFilter}
            onChange={(event) =>
              handleEmploymentFilterChange(event.target.value)
            }
            className="runway-btn-secondary appearance-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-(--ink)"
          >
            {employmentFilterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground)/55" />
        </div>

        <div className="relative">
          <select
            name="position"
            id="position"
            value={positionFilter}
            onChange={(event) => onPositionFilterChange(event.target.value)}
            className="runway-btn-secondary appearance-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-(--ink)"
          >
            <option value="All Positions">All Positions</option>
            {positionOptions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground)/55" />
        </div>

        <div className="relative">
          <select
            name="status"
            id="status"
            value={statusFilter}
            onChange={(event) =>
              onStatusFilterChange(event.target.value as StatusFilterType)
            }
            className="runway-btn-secondary appearance-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-(--ink)"
          >
            <option value="All Statuses">All Statuses</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--foreground)/55" />
        </div>

        <button
          type="button"
          onClick={onClearFilters}
          className="bg-red-500 border border-red-400 text-white inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium"
          aria-label="Clear filters"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
