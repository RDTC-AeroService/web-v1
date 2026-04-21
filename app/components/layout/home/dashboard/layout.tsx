import { AttendanceChart } from "@/app/components/ui/home/dashboard/attendance-chart";
import StatCard from "@/app/components/ui/home/dashboard/stat-card";
import { FaGraduationCap, FaPeopleGroup, FaSackDollar } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";

function DashboardLayout() {
  const stats = [
    {
      label: "Employees",
      value: "154",
      change: "+2",
      isPositive: true,
      icon: <FaPeopleGroup />,
      iconTone: "blue" as const,
    },
    {
      label: "Attendance Rate",
      value: "92.5%",
      change: "+3.3%",
      isPositive: true,
      icon: <MdEventNote />,
      iconTone: "emerald" as const,
    },
    {
      label: "Monthly Payroll Cost",
      value: "$106,500",
      change: "-5.2%",
      isPositive: false,
      icon: <FaSackDollar />,
      iconTone: "amber" as const,
    },
    {
      label: "Training Completion",
      value: "78%",
      change: "+12%",
      isPositive: true,
      icon: <FaGraduationCap />,
      iconTone: "violet" as const,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-(--ink)">Dashboard</h1>
        {/* <p className="text-(--foreground)/70 mt-2">
          Welcome back, John! Here's what's happening with your team.
        </p> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            isPositive={stat.isPositive}
            icon={stat.icon}
            iconTone={stat.iconTone}
          />
        ))}
      </div>

      {/* Attendance Overview */}
      <div className="relative">
        <AttendanceChart />
      </div>
    </div>
  );
}

export default DashboardLayout;
