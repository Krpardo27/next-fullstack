import DashboardPanel from "@/shared/components/dashboard/DashboardPanel";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <DashboardPanel />
        <main className="py-10 lg:pl-72">
          <div className="flex flex-col min-h-dvh lg:my-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
