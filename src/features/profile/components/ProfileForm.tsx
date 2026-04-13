'use client'

import { Form, FormInput, FormLabel } from "@/src/shared/components/forms"
import FormErrors from "@/src/shared/components/forms/FormErrors"
import FormTextarea from "@/src/shared/components/forms/FormTextarea"
import Heading from "@/src/shared/components/typography/Heading"
import { UploadDropzone } from "@uploadthing/react"

export default function ProfileForm() {

  return (
    <>
      <Heading level={1}>ProfileForm</Heading>
      <Form>
        <FormLabel htmlFor="name">Nombre: </FormLabel>
        <FormInput id="name" type="text" placeholder="Tu nombre"/>
        {/* {errors.name && <FormErrors>{errors.name}</FormErrors>} */}
        <FormLabel htmlFor="bio">Biografía: </FormLabel>
        <FormTextarea id="bio" placeholder="Tu biografía"/>
        {/* {errors.bio && <FormErrors>{errors.bio}</FormErrors>} */}
      </Form>
    </>
  )
}
