import { z } from 'zod';

export const registerFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.')
    .toLowerCase(),

  password: z
    .string()
    .min(1, 'Password is required.')
    .min(8, 'Password must be at least 8 characters long.')
    .max(72, 'Password must not exceed 72 characters.')
    .refine(
      (value) => new TextEncoder().encode(value).length <= 72,
      'Password is too long. Please use fewer characters.',
    )
    .refine((value) => /[a-z]/.test(value), 'Password must contain at least one lowercase letter.')
    .refine((value) => /[A-Z]/.test(value), 'Password must contain at least one uppercase letter.')
    .refine((value) => /\d/.test(value), 'Password must contain at least one number.')
    .refine(
      (value) => /[^A-Za-z0-9]/.test(value),
      'Password must contain at least one special character.',
    ),

  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required.')
    .max(50, 'First name must not exceed 50 characters.'),

  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required.')
    .max(50, 'Last name must not exceed 50 characters.'),
});
