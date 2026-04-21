import React from "react";
import { StatsCardProps } from "./employee.interfaces";

function EmployeeStatsCard({
  label,
  value,
  tone: statTone,
  icon,
}: StatsCardProps) {
  const toneStyles = `bg-${statTone}-50/70 border-${statTone}-200 text-${statTone}-500`;

  return (
    <div
      key={label}
      className="runway-stat flex items-center justify-between rounded-2xl px-5 py-4 shadow-[0_10px_24px_-20px_rgba(16,36,58,0.38)]"
    >
      <div>
        <p className="text-sm font-medium text-(--foreground)/70">{label}</p>
        <p className="mt-1 text-3xl font-semibold text-(--ink)">{value}</p>
      </div>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${toneStyles}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default EmployeeStatsCard;
