import { communityRepository } from "./CommunityRepository";
import slugify from "slugify";

class CommunityService {
  async createCommunity(input: {
    name: string;
    description?: string;
    image: string;
    userId: string;
  }) {
    const { name, description, image, userId } = input;

    const exists = await communityRepository.findByNameAndUser(name, userId);

    if (exists) {
      return { error: "Ya tienes una comunidad con ese nombre" };
    }

    const baseSlug = slugify(name, {
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let counter = 1;

    while (await communityRepository.findBySlug(slug)) {
      slug = `${baseSlug}-${counter++}`;
    }

    try {
      await communityRepository.create({
        name,
        description,
        image, 
        userId,
        slug,
      });

      return {
        success: "Comunidad creada correctamente",
      };
    } catch (error) {
      console.error(error);
      return {
        error: "Error al crear la comunidad",
      };
    }
  }
}

export const communityService = new CommunityService();
