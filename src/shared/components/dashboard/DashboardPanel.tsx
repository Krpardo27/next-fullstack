"use client";

import DashboardNavigation from "./DashboardNavigation";
import DashboardHeader from "./DashboardHeader";

export default function DashboardPanel() {
  return (
    <>
      <aside
        className="
          hidden md:flex md:flex-col
          fixed top-0 left-0 z-40
          w-64 h-screen
          bg-white border-r border-gray-200
          dark:bg-zinc-900 dark:border-white/10
        "
      >
        <div className="flex-1 overflow-y-auto">
          <DashboardNavigation />
        </div>
      </aside>

      <DashboardHeader />
    </>
  );
}
