import type { ReactNode } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { StatCardProps } from "./dashboard.interfaces";


export default function StatCard({
  label,
  value,
  change,
  isPositive,
  icon,
  iconTone = "blue",
}: StatCardProps) {
  const iconToneStyles = {
    blue: {
      bg: "bg-blue-50/60",
      border: "border-blue-200",
      text: "text-blue-500",
    },
    emerald: {
      bg: "bg-emerald-50/70",
      border: "border-emerald-200",
      text: "text-emerald-500",
    },
    amber: {
      bg: "bg-amber-50/70",
      border: "border-amber-200",
      text: "text-amber-500",
    },
    violet: {
      bg: "bg-violet-50/70",
      border: "border-violet-200",
      text: "text-violet-500",
    },
  };

  const tone = iconToneStyles[iconTone];

  return (
    <div className="runway-stat rounded-2xl p-6 hover:shadow-lg transition-all  hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-(--foreground)/70">{label}</p>
          <p className="text-4xl font-bold text-(--ink) mt-3">{value}</p>
          <p
            className={`text-sm font-semibold mt-3 ${
              isPositive ? "text-green-600" : "text-red-600"
            } flex items-center gap-1`}
          >
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
            </span>{" "}
            {change}{" "}
            <span className="text-(--foreground)/60">vs last month</span>
          </p>
        </div>
        <div
          className={`text-3xl p-4 rounded-full border ${tone.bg} ${tone.border} ${tone.text}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
