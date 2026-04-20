"use client";

import { useState } from "react";
import {
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const dailyData = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 88 },
  { day: "Wed", attendance: 95 },
  { day: "Thu", attendance: 91 },
  { day: "Fri", attendance: 89 },
  { day: "Sat", attendance: 45 },
  { day: "Sun", attendance: 0 },
];

const weeklyData = [
  { day: "Week 1", attendance: 91 },
  { day: "Week 2", attendance: 93 },
  { day: "Week 3", attendance: 89 },
  { day: "Week 4", attendance: 95 },
];

const monthlyData = [
  { day: "Jan", attendance: 88 },
  { day: "Feb", attendance: 91 },
  { day: "Mar", attendance: 93 },
  { day: "Apr", attendance: 92 },
  { day: "May", attendance: 90 },
  { day: "Jun", attendance: 94 },
];

const tabs = ["Daily", "Weekly", "Monthly"] as const;
type TabType = (typeof tabs)[number];

const summaryItems = [
  { label: "NW Days", value: "22", color: "bg-blue-500" },
  { label: "Absences", value: "3", color: "bg-red-500" },
  { label: "Late Entries", value: "5", color: "bg-amber-500" },
];

export function AttendanceChart() {
  const [activeTab, setActiveTab] = useState<TabType>("Daily");

  const getData = () => {
    switch (activeTab) {
      case "Daily":
        return dailyData;
      case "Weekly":
        return weeklyData;
      case "Monthly":
        return monthlyData;
    }
  };

  return (
    <div className="runway-panel rounded-2xl p-6 md:p-8 border border-(--line)">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-(--ink)">Attendance Overview</h2>
        <div className="flex items-center gap-4">
          {/* Tabs */}
          <div className="flex bg-white/60 rounded-full p-1 border border-(--line)/50">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "runway-btn-primary text-white shadow-sm"
                    : "text-(--foreground)/70 hover:text-(--ink)",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Date Selector */}
          <div className="flex items-center gap-2 bg-white/60 border border-(--line)/50 rounded-full px-3 py-2">
            <button
              type="button"
              aria-label="Previous month"
              title="Previous month"
              className="p-1 hover:bg-white/80 rounded-full transition-colors"
            >
              <ChevronLeft size={16} className="text-(--foreground)/60" />
            </button>
            <div className="flex items-center gap-2 px-2">
              <Calendar size={16} className="text-(--accent)" />
              <span className="text-sm font-semibold text-(--ink)">
                Apr 2026
              </span>
            </div>
            <button
              type="button"
              aria-label="Next month"
              title="Next month"
              className="p-1 hover:bg-white/80 rounded-full transition-colors"
            >
              <ChevronRight size={16} className="text-(--foreground)/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={getData()}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.28} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#c9d6e5"
              opacity={0.55}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#475569", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #c9d6e5",
                borderRadius: "12px",
                boxShadow: "0 12px 24px -16px rgba(16, 36, 58, 0.45)",
              }}
              labelStyle={{ color: "#10243a", fontWeight: 700 }}
              itemStyle={{ color: "#1d4ed8", fontWeight: 600 }}
              formatter={(value) => [`${value ?? 0}%`, "Attendance"]}
            />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="none"
              fill="url(#attendanceFill)"
            />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#2563eb"
              strokeWidth={3.5}
              dot={{
                fill: "#ffffff",
                stroke: "#2563eb",
                strokeWidth: 2.5,
                r: 4.5,
              }}
              activeDot={{
                r: 6.5,
                fill: "#1d4ed8",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-(--line)/60">
        <div className="flex flex-wrap items-center gap-6">
          {summaryItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={cn("w-3 h-3 rounded-full", item.color)} />
              <div>
                <p className="text-sm text-(--foreground)/70">{item.label}</p>
                <p className="text-lg font-semibold text-(--ink)">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 runway-btn-primary text-white rounded-xl font-medium"
        >
          <Plus size={18} />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
