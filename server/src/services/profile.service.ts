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

export async function updateProfileById(id: string, data: { name?: string }) {
  return prisma.user.update({
    where: { id },
    data: {
      name: data.name,
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

export async function updateUserAvatar(userId: string, avatarUrl: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { avatarUrl },
    select: {
      id: true,
      name: true,
      rank: true,
      avatarUrl: true,
      createdAt: true,
    },
  });
}