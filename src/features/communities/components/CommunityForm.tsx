import { FormErrors, FormInput, FormLabel, FormTextarea } from "@/shared/components/forms";
import { useFormContext } from "react-hook-form";
import { CommunityInput } from "./schemas/communitySchema";
import { UploadDropzone } from "@/src/shared/utils/uploadthing";

export default function CommunityForm() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<CommunityInput>();

  return (
    <>
      <FormLabel htmlFor="name">Nombre de la comunidad: </FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Nombre de la comunidad"
        {...register("name")}
      />
      {errors.name && <FormErrors>{errors.name.message}</FormErrors>}

      <FormLabel htmlFor="description">Descripción: </FormLabel>
      <FormTextarea
        id="description"
        placeholder="Descripción de la comunidad"
        {...register("description")}
      />
      {errors.description && (
        <FormErrors>{errors.description.message}</FormErrors>
      )}
      <input type="hidden" {...register("image")} />
      <UploadDropzone
        endpoint="meetiUploader"
        onClientUploadComplete={(res) => {
          const url = res[0].ufsUrl;
          console.log("IMAGE URL:", url);

          setValue("image", url, { shouldValidate: true });
        }}
      />
    </>

  );
}
