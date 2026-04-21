import Sidebar from "../../components/layout/sidebar";
import NavigationBar from "../../components/layout/navigation";
import DashboardLayout from "../../components/layout/home/dashboard/layout";
import EmployeeLayout from "../../components/layout/home/employee/layout";
import AddEmployeeLayout from "../../components/layout/home/employee/add.layout";
import ViewEmployeeLayout from "../../components/layout/home/employee/view.layout";
import AttendanceLayout from "../../components/layout/home/attendence/layout";
import PayrollLayout from "../../components/layout/home/payroll/layout";
import ReportLayout from "../../components/layout/home/report/layout";
import TrainingLayout from "../../components/layout/home/trainning/layout";
import ProfileLayout from "../../components/layout/home/profile/layout";
import BottomBar from "../../components/layout/bottomBar";
import { normalizeSection, type SectionKey } from "./section-config";

const getSectionLayout = (section: SectionKey, view?: string) => {
  switch (section) {
    case "employee":
      if (view === "add") {
        return <AddEmployeeLayout />;
      }

      if (view === "detail") {
        return <ViewEmployeeLayout />;
      }

      return <EmployeeLayout />;
    case "attendance":
      return <AttendanceLayout />;
    case "payroll":
      return <PayrollLayout />;
    case "report":
      return <ReportLayout />;
    case "training":
      return <TrainingLayout />;
    case "profile":
      return <ProfileLayout />;
    case "dashboard":
    default:
      return <DashboardLayout />;
  }
};

export default function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{
    section?: string | string[];
    view?: string | string[];
  }>;
}) {
  const paramsPromise =
    searchParams ??
    Promise.resolve<{ section?: string | string[]; view?: string | string[] }>(
      {},
    );

  return paramsPromise.then((params) => {
    const activeSection = normalizeSection(params.section);
    const activeView = Array.isArray(params.view)
      ? params.view[0]
      : params.view;

    return (
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="min-h-screen flex-1 lg:ml-64">
          {/* Header */}
          <NavigationBar />

          {/* Dashboard Content */}
          <main className="p-4 pb-28 sm:p-6 sm:pb-32 lg:p-8 lg:pb-8">
            {/* Page Title */}
            {getSectionLayout(activeSection, activeView)}
          </main>
        </div>

        <BottomBar />
      </div>
    );
  });
}
