import Heading from '@/shared/components/typography/Heading'
import DashboardPanel from '@/src/shared/components/dashboard/DashboardPanel'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import Link from 'next/link'

export const metadata = {
  title: generatePageTitle('Administra tus Comunidades'),
  description: 'Administra tus Comunidades'
}

export default function CommunitiesPage() {
  return (
    <>
      <DashboardPanel />
      <Heading>Administra tus Comunidades</Heading> 

      <div className="flex justify-between flex-col lg:flex-row">
        <Link
          href="/dashboard/communities/create"
          className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
        >Crear Comunidad</Link>
        <Link
          href="/dashboard/communities/joined"
          className="mt-5 block lg:inline-block text-center bg-pink-500 hover:bg-pink-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
        >Comunidades a las que te uniste</Link>
      </div>
    </>
  )
}
