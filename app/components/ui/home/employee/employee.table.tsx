import { FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { EmployeeRow, EmployeeStatus } from "./employee.interfaces";
import { Trash2Icon } from "lucide-react";

function EmployeeTable({
  filteredEmployees,
  statusTone,
}: {
  filteredEmployees: EmployeeRow[];
  statusTone: Record<EmployeeStatus, string>;
}) {
  const router = useRouter();

  return (
    <table className="min-w-full border-collapse text-left overflow-hidden">
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
            className="border-b border-(--line)/35 text-sm text-(--ink) transition hover:bg-(--line)/10"
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
            <td className="px-3 py-4 flex gap-2 justify-end text-right">
              <button
                type="button"
                aria-label={`View details for ${employee.name}`}
                title={`View details for ${employee.name}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:-translate-y-0.5 hover:bg-sky-100 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                onClick={() => {
                  const params = new URLSearchParams({
                    section: "employee",
                    view: "detail",
                    employeeId: employee.id,
                    name: employee.name,
                    position: employee.position,
                    department: employee.department,
                    employmentType: employee.employmentType,
                    status: employee.status,
                    phone: employee.phone,
                    avatar: employee.avatar,
                    initials: employee.initials,
                  });

                  router.push(`/pages/home?${params.toString()}`);
                }}
              >
                <FaRegEye aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={`Delete ${employee.name}`}
                title={`Delete ${employee.name}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:-translate-y-0.5 hover:bg-rose-100 hover:shadow-sm hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
              >
                <Trash2Icon aria-hidden="true" className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
