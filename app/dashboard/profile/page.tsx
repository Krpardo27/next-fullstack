import ProfileForm from '@/src/features/profile/components/ProfileForm'
import Heading from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: generatePageTitle('Administra tu Perfil'),
  description: 'Profile'
}

export default async function ProfilePage() {
  return (
    <>
      <Heading level={1}>Administra tu Perfil</Heading>
      <ProfileForm />
    </>

  )
}
