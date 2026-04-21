"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";

type PayrollRow = {
  empId: string;
  employeeName: string;
  basicSalary: number;
  nwTotal: number;
  ot50Total: number;
  ot100Total: number;
};

const payrollRows: PayrollRow[] = [
  {
    empId: "EMP001",
    employeeName: "John Smith",
    basicSalary: 2800,
    nwTotal: 2800,
    ot50Total: 120,
    ot100Total: 70,
  },
  {
    empId: "EMP002",
    employeeName: "Jane Doe",
    basicSalary: 2400,
    nwTotal: 2400,
    ot50Total: 95,
    ot100Total: 40,
  },
  {
    empId: "EMP003",
    employeeName: "Robert Johnson",
    basicSalary: 3200,
    nwTotal: 3200,
    ot50Total: 140,
    ot100Total: 85,
  },
  {
    empId: "EMP004",
    employeeName: "Alice White",
    basicSalary: 3600,
    nwTotal: 3600,
    ot50Total: 80,
    ot100Total: 50,
  },
  {
    empId: "EMP005",
    employeeName: "Ben Wilson",
    basicSalary: 1900,
    nwTotal: 1900,
    ot50Total: 60,
    ot100Total: 0,
  },
  {
    empId: "EMP006",
    employeeName: "Lisa Park",
    basicSalary: 2600,
    nwTotal: 2600,
    ot50Total: 110,
    ot100Total: 30,
  },
  {
    empId: "EMP007",
    employeeName: "Alex Brown",
    basicSalary: 3000,
    nwTotal: 3000,
    ot50Total: 210,
    ot100Total: 110,
  },
  {
    empId: "EMP008",
    employeeName: "Michael Lee",
    basicSalary: 2750,
    nwTotal: 2750,
    ot50Total: 150,
    ot100Total: 60,
  },
  {
    empId: "EMP009",
    employeeName: "Sarah Khan",
    basicSalary: 2450,
    nwTotal: 2450,
    ot50Total: 90,
    ot100Total: 35,
  },
  {
    empId: "EMP010",
    employeeName: "Daniel Kim",
    basicSalary: 2950,
    nwTotal: 2950,
    ot50Total: 175,
    ot100Total: 90,
  },
  {
    empId: "EMP011",
    employeeName: "Sophia Miller",
    basicSalary: 3350,
    nwTotal: 3350,
    ot50Total: 130,
    ot100Total: 65,
  },
  {
    empId: "EMP012",
    employeeName: "Noah Davis",
    basicSalary: 2150,
    nwTotal: 2150,
    ot50Total: 50,
    ot100Total: 20,
  },
  {
    empId: "EMP013",
    employeeName: "Emma Garcia",
    basicSalary: 2500,
    nwTotal: 2500,
    ot50Total: 105,
    ot100Total: 45,
  },
  {
    empId: "EMP014",
    employeeName: "Liam Martinez",
    basicSalary: 3450,
    nwTotal: 3450,
    ot50Total: 145,
    ot100Total: 75,
  },
  {
    empId: "EMP015",
    employeeName: "Olivia Thompson",
    basicSalary: 2700,
    nwTotal: 2700,
    ot50Total: 115,
    ot100Total: 55,
  },
  {
    empId: "EMP016",
    employeeName: "Ethan Clark",
    basicSalary: 3050,
    nwTotal: 3050,
    ot50Total: 190,
    ot100Total: 95,
  },
  {
    empId: "EMP017",
    employeeName: "Ava Lewis",
    basicSalary: 2250,
    nwTotal: 2250,
    ot50Total: 75,
    ot100Total: 25,
  },
  {
    empId: "EMP018",
    employeeName: "Mason Young",
    basicSalary: 3150,
    nwTotal: 3150,
    ot50Total: 160,
    ot100Total: 88,
  },
  {
    empId: "EMP019",
    employeeName: "Isabella Hall",
    basicSalary: 2580,
    nwTotal: 2580,
    ot50Total: 122,
    ot100Total: 52,
  },
  {
    empId: "EMP020",
    employeeName: "James Allen",
    basicSalary: 2890,
    nwTotal: 2890,
    ot50Total: 171,
    ot100Total: 73,
  },
  {
    empId: "EMP021",
    employeeName: "Mia Scott",
    basicSalary: 2380,
    nwTotal: 2380,
    ot50Total: 98,
    ot100Total: 41,
  },
  {
    empId: "EMP022",
    employeeName: "Logan Adams",
    basicSalary: 3310,
    nwTotal: 3310,
    ot50Total: 144,
    ot100Total: 67,
  },
  {
    empId: "EMP023",
    employeeName: "Charlotte Baker",
    basicSalary: 2470,
    nwTotal: 2470,
    ot50Total: 109,
    ot100Total: 39,
  },
  {
    empId: "EMP024",
    employeeName: "Elijah Nelson",
    basicSalary: 3520,
    nwTotal: 3520,
    ot50Total: 198,
    ot100Total: 101,
  },
];

const months = ["06-2026", "07-2026", "08-2026", "09-2026"];

const formatCurrency = (amount: number) => {
  return `$${amount.toLocaleString()}`;
};

function PayrollLayout() {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [searchText, setSearchText] = useState("");

  const filteredRows = useMemo(() => {
    const term = searchText.trim().toLowerCase();
    if (!term) {
      return payrollRows;
    }

    return payrollRows.filter((row) => {
      return (
        row.empId.toLowerCase().includes(term) ||
        row.employeeName.toLowerCase().includes(term)
      );
    });
  }, [searchText]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold text-(--ink)">Master Payroll</h1>

        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex items-center rounded-xl border border-(--line)/70 bg-white px-3 py-2 text-sm font-semibold text-(--ink)">
            <span className="sr-only">Payroll month</span>
            <select
              value={selectedMonth}
              onChange={(event) => setSelectedMonth(event.target.value)}
              className="min-w-24 bg-transparent outline-none"
              aria-label="Payroll month"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="runway-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-(--ink)"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="runway-panel rounded-2xl p-4 md:p-5">
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-(--line)/65 bg-white px-3 py-2.5">
          <Search className="h-4 w-4 text-(--foreground)/45" />
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by employee ID or name"
            className="w-full bg-transparent text-sm outline-none placeholder:text-(--foreground)/45"
            aria-label="Search payroll employee"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-(--line)/60 text-xs font-semibold uppercase tracking-wide text-(--foreground)/60">
                <th className="px-4 py-3">Emp ID</th>
                <th className="px-4 py-3">Employee Name</th>
                <th className="px-4 py-3">Basic Salary</th>
                <th className="px-4 py-3">NW Total</th>
                <th className="px-4 py-3">OT 50% Total</th>
                <th className="px-4 py-3">OT 100% Total</th>
                <th className="px-4 py-3">Total Payout</th>
              </tr>
            </thead>

            <tbody>
              {filteredRows.map((row) => {
                const totalPayout =
                  row.nwTotal + row.ot50Total + row.ot100Total;

                return (
                  <tr
                    key={row.empId}
                    className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-white/65"
                  >
                    <td className="px-4 py-3 font-semibold">{row.empId}</td>
                    <td className="px-4 py-3">{row.employeeName}</td>
                    <td className="px-4 py-3">
                      {formatCurrency(row.basicSalary)}
                    </td>
                    <td className="px-4 py-3">{formatCurrency(row.nwTotal)}</td>
                    <td className="px-4 py-3">
                      {formatCurrency(row.ot50Total)}
                    </td>
                    <td className="px-4 py-3">
                      {formatCurrency(row.ot100Total)}
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-700">
                      {formatCurrency(totalPayout)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredRows.length === 0 ? (
          <div className="py-8 text-center text-sm text-(--foreground)/70">
            No payroll records found for this search.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PayrollLayout;
