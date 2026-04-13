import { FiGrid, FiUser, FiBox } from "react-icons/fi";
import { Route } from "next";
import Logo from "../ui/Logo";
import DashboardRoute from "./DashboardRoute";

export type DashboardLink = {
  url: Route;
  text: string;
  icon: React.ReactNode;
  exact?: boolean;
  blank: boolean;
};
const dashboardNavigation: DashboardLink[] = [
  {
    url: "/dashboard",
    text: "Dashboard",
    icon: <FiGrid size={18} />,
    exact: true,
    blank: false,
  },
  {
    url: "/dashboard/communities",
    text: "Comunidades",
    icon: <FiUser size={18} />,
    blank: false,
  },
  // {
  //   url: "/dashboard/profile",
  //   text: "Perfil",
  //   icon: <FiUser size={18} />,
  //   blank: false,
  // },
  // {
  //   url: "/dashboard/products",
  //   text: "Productos",
  //   icon: <FiBox size={18} />,
  //   blank: false,
  // },
];

export default function DashboardNavigation() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-6 flex justify-center border-b border-zinc-200 pb-4 dark:border-white/10">
        <div className="w-28">
          <Logo />
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {dashboardNavigation.map((link) => (
          <DashboardRoute key={link.url} link={link} />
        ))}
      </nav>
    </div>
  );
}
