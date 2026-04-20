"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MdSpaceDashboard,
  MdPeople,
  MdCalendarToday,
  MdReceipt,
  MdAttachMoney,
  MdSchool,
  MdPerson,
} from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const menuItems = [
  { icon: <MdSpaceDashboard />, label: "Dashboard", path: "/pages/home" },
  { icon: <MdPeople />, label: "Employee", path: "/pages/home" },
  { icon: <MdCalendarToday />, label: "Attendance", path: "/pages/home" },
  { icon: <MdReceipt />, label: "Report", path: "/pages/home" },
  { icon: <MdAttachMoney />, label: "Payroll", path: "/pages/home" },
  { icon: <MdSchool />, label: "Training", path: "/pages/home" },
  { icon: <MdPerson />, label: "Profile", path: "/pages/home" },
];

export default function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/pages/auth");
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,246,253,0.98))] px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-18px_36px_-28px_rgba(16,36,58,0.55)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-screen-md items-stretch gap-2 overflow-x-auto rounded-[1.5rem] border border-white/80 bg-white/75 p-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`flex min-w-[4.7rem] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-center transition-all ${
                isActive
                  ? "bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-(--foreground)/68 hover:bg-blue-50 hover:text-(--accent)"
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span className="text-[11px] font-semibold leading-none tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={handleLogout}
          className="flex min-w-[4.7rem] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-center text-(--foreground)/68 transition-all hover:bg-rose-50 hover:text-rose-600"
        >
          <span className="text-xl leading-none">
            <IoLogOutOutline />
          </span>
          <span className="text-[11px] font-semibold leading-none tracking-wide">
            Logout
          </span>
        </button>
      </div>
    </nav>
  );
}
