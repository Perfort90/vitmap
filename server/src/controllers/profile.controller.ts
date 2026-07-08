import type { Request, Response, NextFunction } from 'express';
import { getProfileById } from '../services/profile.service';

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
      return res.status(404).json({
        message: 'Профиль не найден',
      });
    }

    res.json(profile);
  } catch (error) {
    next(error);
  }
}