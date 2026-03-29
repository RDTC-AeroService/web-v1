import { redirect } from "next/navigation";
import { pageRoutes } from "./router";

export default function Home() {
  redirect(pageRoutes.auth.path);
}
