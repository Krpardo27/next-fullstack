"use client";

import DashboardNavigation from "./DashboardNavigation";
import DashboardHeader from "./DashboardHeader";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import MobileSidebar from "./MobileSidebar";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function DashboardPanel() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <>
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <MobileSidebar />
          </DialogPanel>
        </div>
      </Dialog>
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
