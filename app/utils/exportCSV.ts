import { EmployeeRow } from "../components/ui/home/employee/employee.interfaces";

const exportEmployeesData = (fileName: string, filteredEmployees: EmployeeRow[]) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    ["ID,Name,Position,Department,Employment Type,Status,Phone"]
      .concat(
        filteredEmployees.map((e) =>
          [
            e.id,
            e.name,
            e.position,
            e.department,
            e.employmentType,
            e.status,
            e.phone,
          ].join(","),
        ),
      )
      .join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { exportEmployeesData };
