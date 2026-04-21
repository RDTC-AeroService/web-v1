"use client";

import { useMemo, useState } from "react";

type ReportRow = {
  id: string;
  employee: string;
  date: string;
  status: "Present" | "Late" | "Leave" | "Absent";
  workedHrs: number;
  nwHrs: number;
  ot50: number;
  ot100: number;
  dailyBonus: number;
  standardPay: number;
  nightDiff: number;
  dayOtPay: number;
  nightHolOtPay: number;
};

const reportRows: ReportRow[] = [
  {
    id: "EMP001",
    employee: "John Smith",
    date: "01/06/2026",
    status: "Present",
    workedHrs: 9.2,
    nwHrs: 8,
    ot50: 1,
    ot100: 0.2,
    dailyBonus: 8,
    standardPay: 85,
    nightDiff: 6,
    dayOtPay: 7.5,
    nightHolOtPay: 3.2,
  },
  {
    id: "EMP001",
    employee: "John Smith",
    date: "02/06/2026",
    status: "Present",
    workedHrs: 8.8,
    nwHrs: 8,
    ot50: 0.8,
    ot100: 0,
    dailyBonus: 6,
    standardPay: 85,
    nightDiff: 5.2,
    dayOtPay: 6,
    nightHolOtPay: 0,
  },
  {
    id: "EMP001",
    employee: "John Smith",
    date: "03/06/2026",
    status: "Late",
    workedHrs: 8.1,
    nwHrs: 7.5,
    ot50: 0.5,
    ot100: 0.1,
    dailyBonus: 3,
    standardPay: 79,
    nightDiff: 4,
    dayOtPay: 3.8,
    nightHolOtPay: 1.4,
  },
  {
    id: "EMP001",
    employee: "John Smith",
    date: "04/06/2026",
    status: "Present",
    workedHrs: 9.5,
    nwHrs: 8,
    ot50: 1.2,
    ot100: 0.3,
    dailyBonus: 8,
    standardPay: 85,
    nightDiff: 6.5,
    dayOtPay: 9,
    nightHolOtPay: 4.5,
  },
  {
    id: "EMP001",
    employee: "John Smith",
    date: "05/06/2026",
    status: "Leave",
    workedHrs: 0,
    nwHrs: 0,
    ot50: 0,
    ot100: 0,
    dailyBonus: 0,
    standardPay: 0,
    nightDiff: 0,
    dayOtPay: 0,
    nightHolOtPay: 0,
  },
  {
    id: "EMP001",
    employee: "John Smith",
    date: "06/06/2026",
    status: "Present",
    workedHrs: 10,
    nwHrs: 8,
    ot50: 1.4,
    ot100: 0.6,
    dailyBonus: 10,
    standardPay: 85,
    nightDiff: 7,
    dayOtPay: 10.5,
    nightHolOtPay: 8.8,
  },
  {
    id: "EMP002",
    employee: "Jane Doe",
    date: "01/06/2026",
    status: "Present",
    workedHrs: 8.6,
    nwHrs: 8,
    ot50: 0.6,
    ot100: 0,
    dailyBonus: 6,
    standardPay: 78,
    nightDiff: 3.5,
    dayOtPay: 4.5,
    nightHolOtPay: 0,
  },
  {
    id: "EMP002",
    employee: "Jane Doe",
    date: "02/06/2026",
    status: "Present",
    workedHrs: 9.1,
    nwHrs: 8,
    ot50: 0.9,
    ot100: 0.2,
    dailyBonus: 7,
    standardPay: 78,
    nightDiff: 4.5,
    dayOtPay: 6.8,
    nightHolOtPay: 2.9,
  },
  {
    id: "EMP002",
    employee: "Jane Doe",
    date: "03/06/2026",
    status: "Late",
    workedHrs: 7.9,
    nwHrs: 7.2,
    ot50: 0.4,
    ot100: 0,
    dailyBonus: 2,
    standardPay: 70,
    nightDiff: 2.1,
    dayOtPay: 3,
    nightHolOtPay: 0,
  },
  {
    id: "EMP002",
    employee: "Jane Doe",
    date: "04/06/2026",
    status: "Present",
    workedHrs: 8.7,
    nwHrs: 8,
    ot50: 0.6,
    ot100: 0.1,
    dailyBonus: 6,
    standardPay: 78,
    nightDiff: 3.6,
    dayOtPay: 4.5,
    nightHolOtPay: 1.4,
  },
  {
    id: "EMP002",
    employee: "Jane Doe",
    date: "05/06/2026",
    status: "Present",
    workedHrs: 9.3,
    nwHrs: 8,
    ot50: 1,
    ot100: 0.3,
    dailyBonus: 8,
    standardPay: 78,
    nightDiff: 4.8,
    dayOtPay: 7.5,
    nightHolOtPay: 4.2,
  },
  {
    id: "EMP003",
    employee: "Robert Johnson",
    date: "01/06/2026",
    status: "Present",
    workedHrs: 9.8,
    nwHrs: 8,
    ot50: 1.2,
    ot100: 0.6,
    dailyBonus: 10,
    standardPay: 96,
    nightDiff: 7.5,
    dayOtPay: 10,
    nightHolOtPay: 8.6,
  },
  {
    id: "EMP003",
    employee: "Robert Johnson",
    date: "02/06/2026",
    status: "Present",
    workedHrs: 8.9,
    nwHrs: 8,
    ot50: 0.7,
    ot100: 0.2,
    dailyBonus: 7,
    standardPay: 96,
    nightDiff: 5,
    dayOtPay: 5.8,
    nightHolOtPay: 2.8,
  },
  {
    id: "EMP003",
    employee: "Robert Johnson",
    date: "03/06/2026",
    status: "Absent",
    workedHrs: 0,
    nwHrs: 0,
    ot50: 0,
    ot100: 0,
    dailyBonus: 0,
    standardPay: 0,
    nightDiff: 0,
    dayOtPay: 0,
    nightHolOtPay: 0,
  },
  {
    id: "EMP003",
    employee: "Robert Johnson",
    date: "04/06/2026",
    status: "Present",
    workedHrs: 9.4,
    nwHrs: 8,
    ot50: 0.8,
    ot100: 0.6,
    dailyBonus: 8,
    standardPay: 96,
    nightDiff: 6.4,
    dayOtPay: 6.7,
    nightHolOtPay: 8.4,
  },
  {
    id: "EMP003",
    employee: "Robert Johnson",
    date: "05/06/2026",
    status: "Late",
    workedHrs: 8.2,
    nwHrs: 7.6,
    ot50: 0.5,
    ot100: 0.1,
    dailyBonus: 3,
    standardPay: 91,
    nightDiff: 3.9,
    dayOtPay: 4.2,
    nightHolOtPay: 1.2,
  },
  {
    id: "EMP004",
    employee: "Alice White",
    date: "01/06/2026",
    status: "Present",
    workedHrs: 8.5,
    nwHrs: 8,
    ot50: 0.5,
    ot100: 0,
    dailyBonus: 5,
    standardPay: 88,
    nightDiff: 3.2,
    dayOtPay: 4.1,
    nightHolOtPay: 0,
  },
  {
    id: "EMP004",
    employee: "Alice White",
    date: "02/06/2026",
    status: "Present",
    workedHrs: 9,
    nwHrs: 8,
    ot50: 0.8,
    ot100: 0.2,
    dailyBonus: 7,
    standardPay: 88,
    nightDiff: 4.8,
    dayOtPay: 6.3,
    nightHolOtPay: 2.6,
  },
  {
    id: "EMP004",
    employee: "Alice White",
    date: "03/06/2026",
    status: "Present",
    workedHrs: 8.7,
    nwHrs: 8,
    ot50: 0.6,
    ot100: 0.1,
    dailyBonus: 6,
    standardPay: 88,
    nightDiff: 3.5,
    dayOtPay: 4.8,
    nightHolOtPay: 1.3,
  },
  {
    id: "EMP004",
    employee: "Alice White",
    date: "04/06/2026",
    status: "Leave",
    workedHrs: 0,
    nwHrs: 0,
    ot50: 0,
    ot100: 0,
    dailyBonus: 0,
    standardPay: 0,
    nightDiff: 0,
    dayOtPay: 0,
    nightHolOtPay: 0,
  },
  {
    id: "EMP004",
    employee: "Alice White",
    date: "05/06/2026",
    status: "Present",
    workedHrs: 9.4,
    nwHrs: 8,
    ot50: 1.1,
    ot100: 0.3,
    dailyBonus: 8,
    standardPay: 88,
    nightDiff: 5.2,
    dayOtPay: 8.2,
    nightHolOtPay: 4.1,
  },
  {
    id: "EMP005",
    employee: "Ben Wilson",
    date: "01/06/2026",
    status: "Present",
    workedHrs: 8.3,
    nwHrs: 8,
    ot50: 0.3,
    ot100: 0,
    dailyBonus: 4,
    standardPay: 62,
    nightDiff: 2,
    dayOtPay: 2.4,
    nightHolOtPay: 0,
  },
  {
    id: "EMP005",
    employee: "Ben Wilson",
    date: "02/06/2026",
    status: "Late",
    workedHrs: 7.6,
    nwHrs: 7.2,
    ot50: 0.3,
    ot100: 0.1,
    dailyBonus: 2,
    standardPay: 56,
    nightDiff: 1.6,
    dayOtPay: 2.2,
    nightHolOtPay: 1.1,
  },
  {
    id: "EMP005",
    employee: "Ben Wilson",
    date: "03/06/2026",
    status: "Present",
    workedHrs: 8.8,
    nwHrs: 8,
    ot50: 0.6,
    ot100: 0.2,
    dailyBonus: 6,
    standardPay: 62,
    nightDiff: 2.8,
    dayOtPay: 4.5,
    nightHolOtPay: 2.2,
  },
  {
    id: "EMP005",
    employee: "Ben Wilson",
    date: "04/06/2026",
    status: "Present",
    workedHrs: 9.1,
    nwHrs: 8,
    ot50: 0.9,
    ot100: 0.2,
    dailyBonus: 7,
    standardPay: 62,
    nightDiff: 3.1,
    dayOtPay: 6.8,
    nightHolOtPay: 2.4,
  },
  {
    id: "EMP005",
    employee: "Ben Wilson",
    date: "05/06/2026",
    status: "Absent",
    workedHrs: 0,
    nwHrs: 0,
    ot50: 0,
    ot100: 0,
    dailyBonus: 0,
    standardPay: 0,
    nightDiff: 0,
    dayOtPay: 0,
    nightHolOtPay: 0,
  },
];

const uniqueEmployees = Array.from(
  new Set(reportRows.map((row) => row.employee)),
);

const formatMoney = (amount: number) => `$${amount.toFixed(2)}`;

function ReportLayout() {
  const [selectedEmployee, setSelectedEmployee] = useState("All Employees");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredRows = useMemo(() => {
    return reportRows.filter((row) => {
      const employeeMatch =
        selectedEmployee === "All Employees" ||
        row.employee === selectedEmployee;
      const dateMatch = selectedDate ? row.date.includes(selectedDate) : true;
      return employeeMatch && dateMatch;
    });
  }, [selectedDate, selectedEmployee]);

  const totals = useMemo(() => {
    return filteredRows.reduce(
      (acc, row) => {
        acc.standardPay += row.standardPay;
        acc.nightDiff += row.nightDiff;
        acc.dayOtPay += row.dayOtPay;
        acc.nightHolOtPay += row.nightHolOtPay;
        return acc;
      },
      { standardPay: 0, nightDiff: 0, dayOtPay: 0, nightHolOtPay: 0 },
    );
  }, [filteredRows]);

  const totalNetPayout =
    totals.standardPay +
    totals.nightDiff +
    totals.dayOtPay +
    totals.nightHolOtPay;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold text-(--ink)">
          Report - Individual Performance
        </h1>

        <input
          type="text"
          value={selectedDate}
          onChange={(event) => setSelectedDate(event.target.value)}
          placeholder="DD/MM"
          className="w-full rounded-xl border border-(--line)/70 bg-white px-4 py-2.5 text-sm font-semibold text-(--ink) outline-none sm:w-32"
          aria-label="Filter by date"
        />
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-5">
        <label className="mb-4 block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-(--foreground)/65">
            Choose Employee
          </span>
          <select
            value={selectedEmployee}
            onChange={(event) => setSelectedEmployee(event.target.value)}
            className="w-full rounded-lg border border-(--line)/70 bg-white px-3 py-2.5 text-sm font-medium text-(--ink) outline-none"
          >
            <option>All Employees</option>
            {uniqueEmployees.map((employee) => (
              <option key={employee} value={employee}>
                {employee}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-xl bg-[#0f1c34] px-4 py-5 text-center">
            <p className="text-xs font-medium text-blue-200">Standard Pay</p>
            <p className="mt-1 text-4xl font-bold text-sky-300">
              {formatMoney(totals.standardPay)}
            </p>
          </div>
          <div className="rounded-xl bg-[#0f1c34] px-4 py-5 text-center">
            <p className="text-xs font-medium text-blue-200">
              Night Diff (30%)
            </p>
            <p className="mt-1 text-4xl font-bold text-sky-300">
              {formatMoney(totals.nightDiff)}
            </p>
          </div>
          <div className="rounded-xl bg-[#0f1c34] px-4 py-5 text-center">
            <p className="text-xs font-medium text-blue-200">Day OT (1.5x)</p>
            <p className="mt-1 text-4xl font-bold text-sky-300">
              {formatMoney(totals.dayOtPay)}
            </p>
          </div>
          <div className="rounded-xl bg-[#0f1c34] px-4 py-5 text-center">
            <p className="text-xs font-medium text-blue-200">
              Night/Hol OT (2.0x)
            </p>
            <p className="mt-1 text-4xl font-bold text-sky-300">
              {formatMoney(totals.nightHolOtPay)}
            </p>
          </div>
          <div className="rounded-xl bg-[#316ad1] px-4 py-5 text-center">
            <p className="text-xs font-medium text-blue-100">
              Total Net Payout
            </p>
            <p className="mt-1 text-4xl font-bold text-white">
              {formatMoney(totalNetPayout)}
            </p>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-(--line)/60 text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Worked Hrs</th>
                <th className="px-4 py-3">NW Hrs</th>
                <th className="px-4 py-3">OT 50%</th>
                <th className="px-4 py-3">OT 100%</th>
                <th className="px-4 py-3">Daily Bonus</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr
                  key={`${row.id}-${row.date}-${index}`}
                  className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-white/65"
                >
                  <td className="px-4 py-3 font-medium">{row.date}</td>
                  <td className="px-4 py-3">{row.status}</td>
                  <td className="px-4 py-3">{row.workedHrs.toFixed(1)}</td>
                  <td className="px-4 py-3">{row.nwHrs.toFixed(1)}</td>
                  <td className="px-4 py-3">{row.ot50.toFixed(1)}</td>
                  <td className="px-4 py-3">{row.ot100.toFixed(1)}</td>
                  <td className="px-4 py-3">{formatMoney(row.dailyBonus)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRows.length === 0 ? (
          <div className="py-8 text-center text-sm text-(--foreground)/70">
            No report data found for this employee/date filter.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ReportLayout;
