import Link from "next/link";

export default function GuestNavigation() {
  return (
    <nav className="flex items-center gap-3">
      
      <Link
        href="/auth/login"
        className="
          text-sm font-medium text-zinc-700
          px-4 py-2 rounded-lg
          transition
          hover:bg-zinc-100 hover:text-black
        "
      >
        Iniciar sesión
      </Link>

      <Link
        href="/auth/create-account"
        className="
          text-sm font-semibold
          px-5 py-2.5 rounded-xl
          bg-black text-white
          shadow-sm
          transition
          hover:bg-zinc-800
          active:scale-[0.97]
        "
      >
        Crear cuenta
      </Link>

    </nav>
  );
}