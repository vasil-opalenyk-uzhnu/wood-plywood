import { z } from 'zod';

export const resetPasswordFormSchema = z
  .object({
    password: z.string().min(1, 'Password is required.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
