import { z } from 'zod'

export const SigInSchema = z.object({
  email: z.string().email().min(1, 'Campo requerido'),
  password: z.string(),
})

export const SigInResponseSchema = z.object({
  token: z.string(),
})

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email('Formato de email inválido')
      .min(1, 'Campo requerido'),
    password: z.string().min(6, 'Mínimo 6 caracteres'),
    repeatPassword: z.string().min(1, 'Debes repetir la contraseña'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['repeatPassword'],
  })

export type SignUpType = z.infer<typeof SignUpSchema>
export type SignInResponseType = z.infer<typeof SigInResponseSchema>
export type SignInType = z.infer<typeof SigInSchema>
