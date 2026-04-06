"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardLink } from "./DashboardNavigation";

type Props = {
  link: DashboardLink;
};

export default function DashboardRoute({ link }: Props) {
  const pathname = usePathname();

  const isActive = link.exact
    ? pathname === link.url
    : pathname === link.url || pathname.startsWith(`${link.url}/`);

  return (
    <Link
      href={link.url}
      target={link.blank ? "_blank" : "_self"}
      className={`
        group flex items-center gap-3
        rounded-lg
        transition-all duration-200

        px-3 py-2.5
        text-sm font-medium

        ${isActive
          ? "bg-orange-50 text-orange-600 dark:bg-white/5 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
        }
      `}
    >
      {/* INDICADOR */}
      <span
        className={`
          hidden md:block w-1 h-5 rounded-full transition-all
          ${isActive ? "bg-orange-600" : "bg-transparent"}
        `}
      />

      {/* ICON */}
      <span className="text-lg">{link.icon}</span>

      {link.text}
    </Link>
  );
}