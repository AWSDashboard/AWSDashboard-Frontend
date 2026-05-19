import { z } from 'zod'

export const SigInSchema = z.object({
  email: z.string().email().min(1, 'Campo requerido'),
  password: z.string(),
})

export type SignInType = z.infer<typeof SigInSchema>
