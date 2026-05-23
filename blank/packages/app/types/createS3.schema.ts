import { z } from 'zod'

export const BucketSchema = z.object({
  bucketName: z.string(),
  creationDate: z.string(),
})

export const DataPointSchema = z.object({
  timestamp: z.string().datetime(),
  value: z.number(),
})

export const MetricsSchema = z.array(DataPointSchema)

export const S3ObjectSchema = z.object({
  bucketName: z.string(),
  key: z.string(),
  size: z.number().int().nonnegative(),
  lastModified: z.string(),
  storageClass: z.enum([
    'STANDARD',
    'REDUCED_REDUNDANCY',
    'GLACIER',
    'STANDARD_IA',
    'ONEZONE_IA',
    'INTELLIGENT_TIERING',
    'DEEP_ARCHIVE',
    'OUTPOSTS',
    'GLACIER_IR',
  ]),
  contentType: z.string(),
  etag: z.string(),
  content: z.string().optional().nullable(),
})

export const BucketListSchema = z.array(BucketSchema)

export const S3ObjectListSchema = z.array(S3ObjectSchema)

export type DataPointType = z.infer<typeof DataPointSchema>
export type DataPointListType = z.infer<typeof MetricsSchema>
export type S3ObjectType = z.infer<typeof S3ObjectSchema>
export type S3ObjectListType = z.infer<typeof S3ObjectListSchema>
export type BucketType = z.infer<typeof BucketSchema>
export type BucketListType = z.infer<typeof BucketListSchema>
