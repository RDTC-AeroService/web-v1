"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Download,
  UserPlus,
  BriefcaseBusiness,
  CircleCheckBig,
  Clock3,
  UserX,
} from "lucide-react";
import EmployeeStatsCard from "@/app/components/ui/home/employee/employee.statsCard";
import ButtonIcon from "@/app/components/ui/others/button-icon";
import NumberPagenation from "@/app/components/ui/others/numberButton.pagenation";
import EmployeeTable from "@/app/components/ui/home/employee/employee.table";
import EmployeeFilter from "@/app/components/ui/home/employee/employee.filter";
import {
  EmployeeStatus,
  EmployeeRow,
  EmploymentType,
  StatsCardProps,
} from "@/app/components/ui/home/employee/employee.interfaces";
import { exportEmployeesData } from "@/app/utils/exportCSV";
import {
  employeeService,
  PaginatedResponse,
} from "@/app/services/employee.service";
import { Employee } from "@/app/shared/types/employee.type";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80";

const toEmployeeStatus = (value: unknown): EmployeeStatus => {
  const normalized = String(value ?? "").toLowerCase();

  if (normalized.includes("leave")) {
    return "On Leave";
  }

  if (normalized.includes("inactive") || normalized.includes("disabled")) {
    return "Inactive";
  }

  return "Active";
};

const toEmploymentType = (value: unknown): EmploymentType => {
  const normalized = String(value ?? "").toLowerCase();

  if (normalized.includes("part")) {
    return "Part-Time";
  }

  if (normalized.includes("contract")) {
    return "Contract";
  }

  return "Full-Time";
};

const toInitials = (fullName: string): string => {
  const segments = fullName.trim().split(/\s+/).filter(Boolean).slice(0, 2);

  if (segments.length === 0) {
    return "NA";
  }

  return segments.map((segment) => segment[0]?.toUpperCase() ?? "").join("");
};

const toEmployeeRow = (employee: Employee): EmployeeRow => {
  console.log("Raw employee data:", employee);
  const record = employee as unknown as Record<string, unknown>;
  const user = (record.user as Record<string, unknown> | undefined) ?? {};

  const firstName = String(record.firstName ?? record.first_name ?? "").trim();
  const lastName = String(record.lastName ?? record.last_name ?? "").trim();
  const fallbackFullName =
    `${firstName} ${lastName}`.trim() || "Unknown Employee";
  const username = String(user.username ?? "").trim();
  const fullName = fallbackFullName;
  const id = String(
    record.employeeId ??
      record.employee_id ??
      record.userId ??
      record.user_id ??
      "",
  ).trim();

  const rawPosition = record.position;
  const position =
    typeof rawPosition === "string"
      ? rawPosition
      : String(
          (rawPosition as Record<string, unknown> | null)?.positionName ??
            (rawPosition as Record<string, unknown> | null)?.position_name ??
            "Unknown Position",
        );

  const department = String(
    record.department ??
      (rawPosition as Record<string, unknown> | null)?.departmentName ??
      (
        (rawPosition as Record<string, unknown> | null)?.department as
          | Record<string, unknown>
          | undefined
      )?.departmentName ??
      record.department_name ??
      "Unknown Department",
  );

  const avatar = String(user.avatar || DEFAULT_AVATAR).trim();

  return {
    id: id || fullName,
    name: fullName,
    position,
    department,
    employmentType: toEmploymentType(
      record.employmentType ?? record.employment_type,
    ),
    status: toEmployeeStatus(record.status),
    phone: String(record.phone ?? "N/A"),
    avatar,
    initials: username,
  };
};

const statusTone = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Inactive: "bg-slate-200 text-slate-600",
} as const;

function EmployeeLayout() {
  const router = useRouter();
  const [employees, setEmployees] = useState<EmployeeRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [employmentFilter, setEmploymentFilter] = useState<
    "All Times" | EmploymentType
  >("All Times");
  const [positionFilter, setPositionFilter] = useState("All Positions");
  const [statusFilter, setStatusFilter] = useState<
    "All Statuses" | EmployeeStatus
  >("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    let isMounted = true;

    const fetchEmployees = async () => {
      try {
        const response = await employeeService.list({
          page: 1,
          limit: 500,
        });

        if (!isMounted) {
          return;
        }

        const rows = Array.isArray(response)
          ? response
          : (response as PaginatedResponse<Employee>).data;

        setEmployees(rows.map((row) => toEmployeeRow(row)));
        setLoadError("");
      } catch {
        if (!isMounted) {
          return;
        }

        setEmployees([]);
        setLoadError("Unable to load employees right now.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void fetchEmployees();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = useMemo(
    () =>
      [
        {
          label: "Total Employees",
          value: employees.length.toString(),
          tone: "blue",
          icon: <BriefcaseBusiness className="h-5 w-5" />,
        },
        {
          label: "Full-Time",
          value: employees
            .filter((employee) => employee.employmentType === "Full-Time")
            .length.toString(),
          tone: "emerald",
          icon: <CircleCheckBig className="h-5 w-5" />,
        },
        {
          label: "On Leave",
          value: employees
            .filter((employee) => employee.status === "On Leave")
            .length.toString(),
          tone: "amber",
          icon: <Clock3 className="h-5 w-5" />,
        },
        {
          label: "Inactive",
          value: employees
            .filter((employee) => employee.status === "Inactive")
            .length.toString(),
          tone: "rose",
          icon: <UserX className="h-5 w-5" />,
        },
      ] as const satisfies StatsCardProps[],
    [employees],
  );

  const positionOptions = useMemo(() => {
    return Array.from(
      new Set(employees.map((employee) => employee.position)),
    ).sort();
  }, [employees]);

  const statusOptions = useMemo(() => {
    return Array.from(new Set(employees.map((employee) => employee.status)));
  }, [employees]);

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
        employmentFilter === "All Times" ||
        employee.employmentType === employmentFilter;

      const matchesPosition =
        positionFilter === "All Positions" ||
        employee.position === positionFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || employee.status === statusFilter;

      return (
        matchesSearch && matchesEmployment && matchesPosition && matchesStatus
      );
    });
  }, [employees, employmentFilter, positionFilter, searchTerm, statusFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / pageSize),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const pagedEmployees = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * pageSize;
    return filteredEmployees.slice(startIndex, startIndex + pageSize);
  }, [filteredEmployees, safeCurrentPage]);

  const handleSearchTermChange = (value: string) => {
    setCurrentPage(1);
    setSearchTerm(value);
  };

  const handleEmploymentFilterChange = (
    value: "All Times" | EmploymentType,
  ) => {
    setCurrentPage(1);
    setEmploymentFilter(value);
  };

  const handlePositionFilterChange = (value: string) => {
    setCurrentPage(1);
    setPositionFilter(value);
  };

  const handleStatusFilterChange = (value: "All Statuses" | EmployeeStatus) => {
    setCurrentPage(1);
    setStatusFilter(value);
  };

  const handleClearFilters = () => {
    setCurrentPage(1);
    setSearchTerm("");
    setEmploymentFilter("All Times");
    setPositionFilter("All Positions");
    setStatusFilter("All Statuses");
  };

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

        {/* Button Group */}
        <div className="flex flex-wrap items-center gap-3">
          <ButtonIcon
            label="Add Employee"
            className="runway-btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
            icon={<UserPlus className="h-4 w-4" />}
            onClick={() => router.push("/pages/home?section=employee&view=add")}
          />
          <ButtonIcon
            label="Export"
            className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-(--ink)"
            icon={<Download className="h-4 w-4" />}
            onClick={() => exportEmployeesData("employees.csv", employees)}
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <EmployeeStatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            tone={stat.tone}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-6">
        <EmployeeFilter
          searchTerm={searchTerm}
          employmentFilter={employmentFilter}
          positionFilter={positionFilter}
          statusFilter={statusFilter}
          positionOptions={positionOptions}
          statusOptions={statusOptions}
          onSearchTermChange={handleSearchTermChange}
          onEmploymentFilterChange={handleEmploymentFilterChange}
          onPositionFilterChange={handlePositionFilterChange}
          onStatusFilterChange={handleStatusFilterChange}
          onClearFilters={handleClearFilters}
        />

        {isLoading ? (
          <div className="py-10 text-center text-sm text-(--foreground)/65">
            Loading employees...
          </div>
        ) : null}

        {loadError ? (
          <div className="py-4 text-sm font-medium text-rose-600">
            {loadError}
          </div>
        ) : null}

        {!isLoading && !loadError ? (
          <>
            <div className="overflow-x-auto">
              <EmployeeTable
                filteredEmployees={pagedEmployees}
                statusTone={statusTone}
              />
            </div>

            <NumberPagenation
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

            {filteredEmployees.length === 0 ? (
              <div className="py-12 text-center text-sm text-(--foreground)/65">
                No employees match your current search.
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default EmployeeLayout;
