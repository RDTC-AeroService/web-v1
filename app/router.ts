import { unauthorized } from "next/navigation";

const pageRoutes = {
  auth: {
    name: "Login",
    path: "/pages/auth",
  },
  home: {
    name: "Home",
    path: "/pages/home",
  },
  unauthorized: {
    name: "Unauthorized",
    path: "/pages/unauthorized",
  },
};

export { pageRoutes };
