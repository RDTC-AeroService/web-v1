interface StatsCardProps {
  label: string;
  value: string;
  tone: "blue" | "emerald" | "amber" | "rose";
  icon: React.ReactNode;
}

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

export type { StatsCardProps, EmployeeRow, EmployeeStatus, EmploymentType };