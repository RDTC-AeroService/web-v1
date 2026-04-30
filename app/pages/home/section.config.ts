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
  employee: "employee",
  attendance: "attendance",
  payroll: "payroll",
  report: "report",
  training: "training",
  profile: "profile",
};

export function normalizeSection(section?: string | string[]): SectionKey {
  const raw = Array.isArray(section) ? section[0] : section;
  const normalized = (raw ?? "dashboard")
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-");
  return sectionAliases[normalized] ?? "dashboard";
}

