import Link from "next/link";
import Logo from "./Logo";
import GuestNavigation from "./GuestNavigation";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <GuestNavigation />
      </div>
    </header>
  );
}