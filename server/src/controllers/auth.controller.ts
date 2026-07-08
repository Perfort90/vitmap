import type { Request, Response, NextFunction } from 'express';
import { loginUser, registerUser } from '../services/auth.service';
import { loginSchema, registerSchema } from '../schemas/auth.schema';

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const data = registerSchema.parse(req.body);  
    const user = await registerUser(data);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const data = loginSchema.parse(req.body);  
    const user = await loginUser(data);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}