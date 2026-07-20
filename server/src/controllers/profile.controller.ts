import type { Request, Response, NextFunction } from 'express';
import {
  getProfileById,
  updateProfileById,
  updateUserAvatar,
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

    const updatedProfile = await updateProfileById(req.user.id, req.body);

    res.json(updatedProfile);
  } catch (error) {
    next(error);
  }
}

export async function updateMyAvatar(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Нет авторизации" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Файл не загружен" });
    }

    const avatarUrl = `/uploads/avatars/${req.file.filename}`;

    const updatedUser = await updateUserAvatar(req.user.id, avatarUrl);

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}