import type { Request, Response, NextFunction } from 'express';
import {
  getProfileById,
  updateProfileById
} from '../services/profile.service';
type ProfileParams = {
  id: string;
};

export async function getProfileInfo(
  req: Request<ProfileParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const profile = await getProfileById(id);

    if (!profile) {
      return res.status(404).json({ message: 'Профиль не найден' });
    }

    res.json(profile);
  } catch (error) {
    next(error);
  }
}

export async function updateMyProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Нет авторизации' });
    }

    const avatarUrl = req.file
      ? `/uploads/avatars/${req.file.filename}`
      : undefined;

    const updatedProfile = await updateProfileById(req.user.id, {
      name: req.body.name,
      avatarUrl,
    });

    res.json(updatedProfile);
  } catch (error) {
    next(error);
  }
}