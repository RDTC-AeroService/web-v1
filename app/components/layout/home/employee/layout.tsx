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
  {
    id: "EMP009",
    name: "Sofia Carter",
    position: "Cabin Supervisor",
    department: "Cabin Crew",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2009",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=160&q=80",
    initials: "SC",
  },
  {
    id: "EMP010",
    name: "Daniel Kim",
    position: "Dispatcher",
    department: "Operations Control",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2010",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    initials: "DK",
  },
  {
    id: "EMP011",
    name: "Nina Patel",
    position: "Analyst",
    department: "Finance",
    employmentType: "Contract",
    status: "On Leave",
    phone: "(555) 013-2011",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&q=80",
    initials: "NP",
  },
  {
    id: "EMP012",
    name: "Omar Hussein",
    position: "Ground Operations Lead",
    department: "Ground Support",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2012",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80",
    initials: "OH",
  },
  {
    id: "EMP013",
    name: "Emily Johnson",
    position: "Safety Officer",
    department: "Compliance",
    employmentType: "Part-Time",
    status: "Active",
    phone: "(555) 013-2013",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    initials: "EJ",
  },
  {
    id: "EMP014",
    name: "Carlos Rivera",
    position: "Aircraft Technician",
    department: "Maintenance",
    employmentType: "Full-Time",
    status: "Inactive",
    phone: "(555) 013-2014",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    initials: "CR",
  },
  {
    id: "EMP015",
    name: "Hannah Brooks",
    position: "Recruiter",
    department: "HR",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2015",
    avatar:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=160&q=80",
    initials: "HB",
  },
  {
    id: "EMP016",
    name: "David Nguyen",
    position: "Systems Engineer",
    department: "IT",
    employmentType: "Contract",
    status: "Active",
    phone: "(555) 013-2016",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=160&q=80",
    initials: "DN",
  },
  {
    id: "EMP017",
    name: "Priya Shah",
    position: "Training Coordinator",
    department: "Training",
    employmentType: "Full-Time",
    status: "On Leave",
    phone: "(555) 013-2017",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=160&q=80",
    initials: "PS",
  },
  {
    id: "EMP018",
    name: "Ethan Walker",
    position: "Fleet Manager",
    department: "Operations",
    employmentType: "Full-Time",
    status: "Active",
    phone: "(555) 013-2018",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    initials: "EW",
  },
  {
    id: "EMP019",
    name: "Mia Thompson",
    position: "Customer Support Lead",
    department: "Support",
    employmentType: "Part-Time",
    status: "Active",
    phone: "(555) 013-2019",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    initials: "MT",
  },
  {
    id: "EMP020",
    name: "Lucas Martin",
    position: "Logistics Coordinator",
    department: "Supply Chain",
    employmentType: "Contract",
    status: "Inactive",
    phone: "(555) 013-2020",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=160&q=80",
    initials: "LM",
  },
];

const stats = [
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
] as const satisfies StatsCardProps[];

const statusTone = {
  Active: "bg-emerald-100 text-emerald-700",
  "On Leave": "bg-amber-100 text-amber-700",
  Inactive: "bg-slate-200 text-slate-600",
} as const;

function EmployeeLayout() {
  const router = useRouter();
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

  const positionOptions = useMemo(() => {
    return Array.from(
      new Set(employees.map((employee) => employee.position)),
    ).sort();
  }, []);

  const statusOptions = useMemo(() => {
    return Array.from(new Set(employees.map((employee) => employee.status)));
  }, []);

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
  }, [employmentFilter, positionFilter, searchTerm, statusFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / pageSize),
  );

  const pagedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredEmployees.slice(startIndex, startIndex + pageSize);
  }, [currentPage, filteredEmployees]);

  useEffect(() => {
    setCurrentPage(1);
  }, [employmentFilter, positionFilter, searchTerm, statusFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  

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
          onSearchTermChange={setSearchTerm}
          onEmploymentFilterChange={setEmploymentFilter}
          onPositionFilterChange={setPositionFilter}
          onStatusFilterChange={setStatusFilter}
          onClearFilters={() => {
            setSearchTerm("");
            setEmploymentFilter("All Times");
            setPositionFilter("All Positions");
            setStatusFilter("All Statuses");
          }}
        />

        <div className="overflow-x-auto">
          <EmployeeTable
            filteredEmployees={pagedEmployees}
            statusTone={statusTone}
          />
        </div>

        <NumberPagenation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

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