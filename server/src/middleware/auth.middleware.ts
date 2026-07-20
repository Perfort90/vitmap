import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  userId: string;
  email: string;
};

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Нет токена' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || 'dev-secret'
    ) as JwtPayload;

    req.user = {
      id: payload.userId,
      email: payload.email,
    };

    next();
  } catch {
    return res.status(401).json({ message: 'Неверный токен' });
  }
}