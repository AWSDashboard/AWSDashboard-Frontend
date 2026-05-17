import { z } from 'zod'

export const createEc2Schema = z.object({
  name: z
    .string()
    .min(1, { message: 'El nombre de la instancia es obligatorio' })
    .max(50, { message: 'El nombre es demasiado largo' }),
  imageId: z.string().min(1, { message: 'Debes seleccionar una imagen (AMI)' }),
  instanceType: z
    .string()
    .min(1, { message: 'Debes seleccionar un tipo de instancia' }),
  keyName: z.string(),
  subnet: z.string().optional(),
})

export type CreateEc2FormValues = z.infer<typeof createEc2Schema>
