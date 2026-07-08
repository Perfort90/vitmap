import { Router } from 'express';
import {getProfileInfo} from "../controllers/profile.controller"

const router = Router();

  router.get('/profile/:id', getProfileInfo);
 

export default router;