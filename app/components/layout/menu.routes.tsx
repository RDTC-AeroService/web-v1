import {
  MdSpaceDashboard,
  MdPeople,
  MdCalendarToday,
  MdReceipt,
  MdAttachMoney,
  MdSchool,
  MdPerson,
} from "react-icons/md";
import type { MenuItem } from "./menu.type";

export const MenuItems: MenuItem[] = [
  {
    icon: <MdSpaceDashboard />,
    label: "Dashboard",
    path: "/pages/home?section=dashboard",
    key: "dashboard",
  },
  {
    icon: <MdPeople />,
    label: "Employee",
    path: "/pages/home?section=employee",
    key: "employee",
  },
  {
    icon: <MdCalendarToday />,
    label: "Attendance",
    path: "/pages/home?section=attendance",
    key: "attendance",
  },
  {
    icon: <MdReceipt />,
    label: "Report",
    path: "/pages/home?section=report",
    key: "report",
  },
  {
    icon: <MdAttachMoney />,
    label: "Master Payroll",
    path: "/pages/home?section=payroll",
    key: "payroll",
  },
  {
    icon: <MdSchool />,
    label: "Training",
    path: "/pages/home?section=training",
    key: "training",
  },
  {
    icon: <MdPerson />,
    label: "Profile",
    path: "/pages/home?section=profile",
    key: "profile",
  },
];
