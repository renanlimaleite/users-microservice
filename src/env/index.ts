import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(5000),
})

const envValidation = envSchema.safeParse(process.env)

if (!envValidation.success) {
  console.error('Invalid environment variables', envValidation.error)
  throw new Error('Invalid environment variables')
}

export const env = envValidation.data
