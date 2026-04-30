"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { normalizeSection } from "../../pages/home/section.config";
import { MenuItems } from "./menu.routes";
import { pageRoutes } from "../../router";

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSection = normalizeSection(
    searchParams.get("section") ?? undefined,
  );

  const handleLogout = async () => {
    localStorage.removeItem("token");
    cookieStore.delete("token");
    router.replace(pageRoutes.auth.path);
  };

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 overflow-hidden bg-linear-to-b from-[#1147af] via-[#1557cf] to-[#0e7490] shadow-xl lg:block">
      <div className="absolute inset-0 opacity-55 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="p-6">
          <div className="">
            <img
              src="/RDTC.png"
              className="object-contain w-30 h-auto"
              alt="Logo"
            />
            <p className="mt-4 text-sm font-medium text-white/70">
              Crew Command Center
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-6 py-2 mt-5">
          <ul className="space-y-1">
            {MenuItems.map((item) => {
              const isActive = item.key === activeSection;

              return (
                <li key={item.key}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "border border-white bg-white text-[#1147af] font-bold"
                        : "text-white/86 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/92 hover:bg-white/10 transition-all"
          >
            <span className="text-lg">
              <IoLogOutOutline />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
