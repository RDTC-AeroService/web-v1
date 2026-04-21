import { EmployeeRow, EmployeeStatus } from "./employee.interfaces";
import { ChevronDown } from "lucide-react";

function EmployeeTable(
    { filteredEmployees, statusTone }: {
        filteredEmployees: EmployeeRow[];
        statusTone: Record<EmployeeStatus, string>;
    }
) {
  return (
    <table className="min-w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-(--line)/50 text-xs font-semibold uppercase tracking-wide text-(--foreground)/55">
          <th className="px-3 py-4">Employee ID</th>
          <th className="px-3 py-4">Name</th>
          <th className="px-3 py-4">Position</th>
          <th className="px-3 py-4">Department</th>
          <th className="px-3 py-4">Employment Type</th>
          <th className="px-3 py-4">Status</th>
          <th className="px-3 py-4">Phone</th>
          <th className="px-3 py-4 text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr
            key={employee.id}
            className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-white/70"
          >
            <td className="px-3 py-4 font-semibold text-(--ink)">
              <div className="flex items-center gap-3">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="h-11 w-11 rounded-full border border-white object-cover shadow-sm"
                />
                <div>
                  <p>{employee.id}</p>
                  <p className="text-xs font-medium text-(--foreground)/55">
                    {employee.initials}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-3 py-4 font-medium">{employee.name}</td>
            <td className="px-3 py-4">{employee.position}</td>
            <td className="px-3 py-4">{employee.department}</td>
            <td className="px-3 py-4">{employee.employmentType}</td>
            <td className="px-3 py-4">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusTone[employee.status]}`}
              >
                {employee.status}
              </span>
            </td>
            <td className="px-3 py-4 text-(--foreground)/80">
              {employee.phone}
            </td>
            <td className="px-3 py-4 text-right">
              <button
                type="button"
                className="runway-btn-secondary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-(--ink)"
              >
                View
                <ChevronDown className="h-4 w-4 text-(--foreground)/55" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
