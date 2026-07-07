import type { Request, Response, NextFunction } from 'express';
import { loginUser, registerUser } from '../services/auth.service';

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await registerUser(req.body);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await loginUser(req.body);

    res.json(result);
  } catch (error) {
    next(error);
  }
}