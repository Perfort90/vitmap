import { Router } from 'express';
import {
  getProfileInfo,
  updateMyProfile
} from '../controllers/profile.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { uploadAvatar } from '../middleware/upload.middleware';

const router = Router();

router.get('/profile/:id', getProfileInfo);
router.patch(
  '/profile/me',
  authMiddleware,
  uploadAvatar.single('avatar'),
  updateMyProfile
);

export default router;