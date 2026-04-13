import { prisma } from "@/src/lib/prisma";

class CommunityRepository {
  async create(data: {
    name: string;
    slug: string;
    image: string;
    description?: string;
    userId: string;
  }) {
    return prisma.community.create({
      data,
    });
  }

  async findBySlug(slug: string) {
    return prisma.community.findUnique({
      where: { slug },
    });
  }

  async findByNameAndUser(name: string, userId: string) {
    return prisma.community.findFirst({
      where: {
        name,
        userId,
      },
    });
  }
}

export const communityRepository = new CommunityRepository();