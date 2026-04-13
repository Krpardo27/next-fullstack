import Heading from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import Link from 'next/link'

export const metadata = {
  title: generatePageTitle('Unirse a Comunidad'),
  description: 'Únete a una comunidad existente para compartir tus intereses y conectar con personas afines.'
}

export default function JoinedCommunitiesPage() {
  return (
    <>
      <Heading>Unirse a Comunidad</Heading>

      <Link
        href="/dashboard/communities"
        className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
      >Volver a mis Comunidades</Link>
    </>
  )
}
