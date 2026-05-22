import { z } from 'zod'

export const AWSCredentialsSchema = z.object({
  AWS_CLI: z.string(),
})

export type AWSCredentialsType = z.infer<typeof AWSCredentialsSchema>
