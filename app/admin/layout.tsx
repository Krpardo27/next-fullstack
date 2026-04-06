import { requireAuth } from "@/src/lib/auth-server";
import DashboardPanel from "@/src/shared/components/dashboard/DashboardPanel";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth } = await requireAuth();

  if (!isAuth) redirect("/auth/login");

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <DashboardPanel />

      <main
        className="
          flex-1
          ml-0 lg:ml-64
          pt-16   /* 🔥 espacio del header */
          px-6 py-6
          max-w-7xl mx-auto w-full
        "
      >
        {children}
      </main>
    </div>
  );
}