import Sidebar from "@/app/components/layout/sidebar";
import NavigationBar from "@/app/components/layout/navigation";
import DashboardLayout from "@/app/components/layout/home/dashboard/layout";
import BottomBar from "@/app/components/layout/bottomBar";

export default function HomePage() {
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
          <DashboardLayout />
        </main>
      </div>

      <BottomBar />
    </div>
  );
}
