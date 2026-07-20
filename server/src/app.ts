import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { ZodError } from 'zod';
import routes from './routes';
import path from "node:path";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.send('<h2>бэк воркает!</h2>');
});

app.use('/api', routes);
app.use("/uploads", express.static(path.resolve("server/uploads")));
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Внутренняя ошибка сервера' });

  if (err instanceof ZodError) {
  return res.status(400).json({
    message: 'Ошибка валидации',
    errors: err.issues,
  });
}
});



export default app;