import { prisma } from '../models/prisma';

export async function getProfileById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      rank: true,
      createdAt: true,
    },
  });
}