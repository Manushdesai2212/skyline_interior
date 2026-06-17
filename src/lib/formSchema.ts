import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[0-9\s-]{9,18}$/, 'Invalid phone number'),
  projectType: z.enum(['residential', 'commercial', 'architecture', 'set_design', 'landscape', 'renovation', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
