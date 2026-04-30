"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { normalizeSection } from "../../pages/home/section.config";
import { MenuItems } from "./menu.routes";

export default function BottomBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSection = normalizeSection(
    searchParams.get("section") ?? undefined,
  );

  const handleLogout = async () => {
    localStorage.removeItem("token");
    cookieStore.delete("token");
    router.replace("/login");
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,246,253,0.98))] px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-18px_36px_-28px_rgba(16,36,58,0.55)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-3xl items-stretch gap-2 overflow-x-auto rounded-3xl border border-white/80 bg-white/75 p-2">
        {MenuItems.map((item) => {
          const isActive = activeSection === item.key;

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
