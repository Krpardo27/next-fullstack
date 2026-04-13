import Heading from "@/shared/components/typography/Heading";
import CreateCommunity from "@/src/features/communities/components/CreateCommunity";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import Link from "next/link";

export const metadata = {
  title: generatePageTitle("Crear Comunidad"),
  description:
    "Crea una nueva comunidad para compartir tus intereses y conectar con personas afines.",
};

export default function CreateCommunityPage() {
  return (
    <>
      <Heading>Crear Comunidad</Heading>

      <Link
        href="/dashboard/communities"
        className="mt-5 flex justify-center max-w-sm text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
      >
        Volver a mis Comunidades
      </Link>

      <CreateCommunity />
    </>
  );
}
