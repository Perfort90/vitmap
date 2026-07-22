import { prisma } from '../models/prisma';

export async function getProfileById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      description: true, 
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
    description?:string;
    avatarUrl?: string;
  }
) {
  return prisma.user.update({
    where: { id },
    data: {
      name: data.name,
      description:data.description,
      avatarUrl: data.avatarUrl,
    },
    select: {
      id: true,
      name: true,
      rank: true,
      avatarUrl: true,
      description:true,
      createdAt: true,
    },
  });
}