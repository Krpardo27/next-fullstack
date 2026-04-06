import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-125 bg-hero bg-cover bg-center flex items-center justify-center">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

        <h1 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
          Bienvenido a nuestra aplicación
        </h1>

        <p className="mt-4 text-sm lg:text-base text-zinc-300 max-w-md">
          Gestiona todo de forma rápida, moderna y eficiente desde un solo lugar.
        </p>

        <Link
          href="/auth/create-account"
          className="
            mt-6
            px-6 py-3
            rounded-xl
            bg-white text-black
            font-semibold text-sm
            shadow-md
            transition-all
            hover:bg-zinc-200
            hover:scale-[1.03]
            active:scale-[0.98]
          "
        >
          Crear cuenta
        </Link>

      </div>
    </section>
  );
}