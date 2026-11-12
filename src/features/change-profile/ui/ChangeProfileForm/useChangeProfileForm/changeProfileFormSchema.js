import { z } from 'zod';

export const changeProfileFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'At least one character')
    .max(50, 'Maximum of fifty characters'),
  lastName: z
    .string()
    .trim()
    .min(1, 'At least one character')
    .max(50, 'Maximum of fifty characters'),
});
