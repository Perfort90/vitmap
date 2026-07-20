import { Router } from 'express';
import {
  getProfileInfo,
  updateMyProfile,
  updateMyAvatar,
} from '../controllers/profile.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { uploadAvatar } from '../middleware/upload.middleware';

const router = Router();

router.get('/profile/:id', getProfileInfo);
router.patch('/profile/me', authMiddleware, updateMyProfile);

router.patch(
  '/profile/me/avatar',
  authMiddleware,
  uploadAvatar.single('avatar'),
  updateMyAvatar
);

export default router;