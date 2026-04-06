import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Inicio"),
  description: "Página de inicio de la aplicación"
}

export default async function Home() {

  return (
    <>
      <Hero />
    </>
  );
}
