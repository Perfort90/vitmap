import { prisma } from '../models/prisma';

export async function getProfileById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      rank: true,
      avatarUrl: true,
      createdAt: true,
    },
  });
}

export async function updateProfileById(
  id: string,
  data: {
    name?: string;
    avatarUrl?: string;
  }
) {
  return prisma.user.update({
    where: { id },
    data: {
      name: data.name,
      avatarUrl: data.avatarUrl,
    },
    select: {
      id: true,
      name: true,
      rank: true,
      avatarUrl: true,
      createdAt: true,
    },
  });
}