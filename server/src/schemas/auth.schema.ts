import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Некорректная почта'),
  password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
  name: z.string().min(2, 'Имя слишком короткое').max(40, 'Имя слишком длинное').optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Некорректная почта'),
  password: z.string().min(1, 'Введите пароль'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;