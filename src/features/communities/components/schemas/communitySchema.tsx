import { z } from "zod";

export const CommunitySchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre de la comunidad es obligatorio" }),

  description: z
    .string()
    .min(10, { message: "La descripción es obligatoria" }),

  image: z.string().min(1, "La imagen es obligatoria")
});

export type CommunityInput = z.infer<typeof CommunitySchema>;