export type SectionKey =
  | "dashboard"
  | "employee"
  | "attendance"
  | "payroll"
  | "report"
  | "training"
  | "profile";

const sectionAliases: Record<string, SectionKey> = {
  dashboard: "dashboard",
  home: "dashboard",
  main: "dashboard",

  employee: "employee",
  employees: "employee",
  staff: "employee",

  attendance: "attendance",
  attendence: "attendance",

  payroll: "payroll",
  salary: "payroll",
  "master-payroll": "payroll",

  report: "report",
  reports: "report",

  training: "training",
  trainning: "training",

  profile: "profile",
  user: "profile",
};

export function normalizeSection(section?: string | string[]): SectionKey {
  const raw = Array.isArray(section) ? section[0] : section;
  const normalized = (raw ?? "dashboard")
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-");
  return sectionAliases[normalized] ?? "dashboard";
}
