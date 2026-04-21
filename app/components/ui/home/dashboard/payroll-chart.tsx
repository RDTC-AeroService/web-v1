"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const monthlyData = [
  { month: "Aug", normal: 18000, overtime: 0 },
  { month: "Sep", normal: 18500, overtime: 0 },
  { month: "Oct", normal: 22000, overtime: 0 },
  { month: "Nov", normal: 24000, overtime: 0 },
  { month: "Dec", normal: 26000, overtime: 0 },
  { month: "Jan", normal: 27000, overtime: 0 },
  { month: "Feb", normal: 32000, overtime: 0 },
  { month: "Mar", normal: 38000, overtime: 2000 },
  { month: "Apr", normal: 48000, overtime: 3000 },
  { month: "May", normal: 56000, overtime: 3500 },
  { month: "Jun", normal: 65000, overtime: 4000 },
  { month: "Jul", normal: 72000, overtime: 5000 },
];

const quarterlyData = [
  { month: "Q1", normal: 90000, overtime: 2000 },
  { month: "Q2", normal: 142000, overtime: 8500 },
  { month: "Q3", normal: 58500, overtime: 0 },
  { month: "Q4", normal: 72000, overtime: 5000 },
];

const yearlyData = [
  { month: "2025", normal: 108500, overtime: 0 },
  { month: "2026", normal: 338000, overtime: 14500 },
];

const tabs = ["Monthly", "Quarterly", "Yearly"] as const;
type TabType = (typeof tabs)[number];

const formatYAxis = (value: number) => {
  if (value === 0) return "$0";
  if (value >= 1000) return `$${Math.round(value / 1000)}k`;
  return `$${value}`;
};

const getTooltipTextColorClass = (name: string) => {
  if (name === "Normal Pay") return "text-[#1d4ed8]";
  if (name === "Overtime Pay") return "text-[#b45309]";
  return "text-gray-600";
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + entry.value, 0);
    return (
      <div className="rounded-xl border border-[#c9d6e5] bg-white p-3 text-sm shadow-[0_12px_24px_-16px_rgba(16,36,58,0.45)]">
        <p className="mb-1 font-semibold text-[#10243a]">{label}</p>
        {payload.map((entry) => (
          <p
            key={entry.name}
            className={`text-xs ${getTooltipTextColorClass(entry.name)}`}
          >
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
        <p className="mt-1 border-t border-[#e5edf6] pt-1 text-xs text-[#64748b]">
          Total: ${total.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function PayrollChart() {
  const [activeTab, setActiveTab] = useState<TabType>("Monthly");

  const data =
    activeTab === "Monthly"
      ? monthlyData
      : activeTab === "Quarterly"
        ? quarterlyData
        : yearlyData;

  const totalNormal = data.reduce((sum, item) => sum + item.normal, 0);
  const totalOvertime = data.reduce((sum, item) => sum + item.overtime, 0);
  const totalPayroll = totalNormal + totalOvertime;

  return (
    <div className="runway-panel rounded-2xl border border-(--line) p-6 md:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-(--ink)">Payroll Overview</h2>

        <div className="flex items-center gap-4">
          <div className="flex rounded-full border border-(--line)/50 bg-white/60 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "runway-btn-primary text-white shadow-sm"
                    : "text-(--foreground)/70 hover:text-(--ink)",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-(--line)/50 bg-white/60 px-3 py-2">
            <button
              type="button"
              aria-label="Previous period"
              title="Previous period"
              className="rounded-full p-1 transition-colors hover:bg-white/80"
            >
              <ChevronLeft size={16} className="text-(--foreground)/60" />
            </button>
            <div className="flex items-center gap-2 px-2">
              <Calendar size={16} className="text-(--accent)" />
              <span className="text-sm font-semibold text-(--ink)">
                FY 2025-2026
              </span>
            </div>
            <button
              type="button"
              aria-label="Next period"
              title="Next period"
              className="rounded-full p-1 transition-colors hover:bg-white/80"
            >
              <ChevronRight size={16} className="text-(--foreground)/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 8, right: 20, left: 0, bottom: 5 }}
            barSize={26}
            barCategoryGap="24%"
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#c9d6e5"
              opacity={0.55}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#475569", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              tickFormatter={formatYAxis}
              width={56}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(37,99,235,0.08)" }}
            />
            <Bar
              dataKey="normal"
              name="Normal Pay"
              stackId="pay"
              fill="#93b4d4"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="overtime"
              name="Overtime Pay"
              stackId="pay"
              fill="#e8d5a3"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-(--line)/60 pt-6 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full bg-[#93b4d4]" />
            <div>
              <p className="text-sm text-(--foreground)/70">Normal Pay</p>
              <p className="text-lg font-semibold text-(--ink)">
                ${totalNormal.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full bg-[#e8d5a3]" />
            <div>
              <p className="text-sm text-(--foreground)/70">Overtime Pay</p>
              <p className="text-lg font-semibold text-(--ink)">
                ${totalOvertime.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="runway-btn-primary flex items-center gap-2 rounded-xl px-4 py-2 font-medium text-white"
        >
          <Plus size={18} />
          <span>Total ${totalPayroll.toLocaleString()}</span>
        </button>
      </div>
    </div>
  );
}
