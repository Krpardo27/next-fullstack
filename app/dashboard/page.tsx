import Heading from '@/shared/components/typography/Heading'
import DashboardPanel from '@/src/shared/components/dashboard/DashboardPanel'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import Link from 'next/link'

export const metadata = {
  title: generatePageTitle('Panel de Administración'),
  description: 'Panel de administración para gestionar tus comunidades, publicaciones y más.',
}

export default function CommunitiesPage() {
  return (
    <>
      <Heading>Panel de Administración</Heading>

    </>
  )
}
