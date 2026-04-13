"use server";

import { requireAuth } from "@/src/lib/auth-server";
import {
  CommunityInput,
  CommunitySchema,
} from "../components/schemas/communitySchema";
import { communityService } from "../services/CommunityService";

export async function createCommunityAction(input: CommunityInput) {
  const result = CommunitySchema.safeParse(input);

  if (!result.success) {
    return {
      error: "Datos inválidos",
      success: "",
    };
  }

  const { session } = await requireAuth();

  if (!session?.user?.id) {
    return {
      error: "No autorizado",
      success: "",
    };
  }

  return await communityService.createCommunity({
    ...result.data,
    userId: session.user.id,
  });
}
