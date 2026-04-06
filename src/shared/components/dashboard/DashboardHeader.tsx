'use client'

import { Bars3Icon } from "@heroicons/react/24/outline"
import NotificationsPanel from "./NotificationPanel"
import UserMenu from "./UserMenu"

type DashboardHeaderProps = {
  title?: string
  onOpenSidebar?: () => void
}

export default function DashboardHeader({
  title = "Panel de Administración",
  onOpenSidebar,
}: DashboardHeaderProps) {
  return (
    <header
      className="
        fixed inset-x-0 top-0 z-30 h-16
        border-b border-gray-200 bg-white/80 backdrop-blur
        dark:border-white/10 dark:bg-zinc-900/80
        lg:left-64
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="
              rounded-md p-2 text-gray-600 hover:bg-gray-100
              lg:hidden
              dark:text-gray-300 dark:hover:bg-white/10
            "
          >
            <Bars3Icon className="size-5" />
          </button>

          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <NotificationsPanel />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}