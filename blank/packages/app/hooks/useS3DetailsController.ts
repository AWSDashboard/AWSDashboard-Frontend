import { useState } from 'react'
import { useRouter } from 'solito/navigation'
import {
  useS3Buckets,
  useS3List,
  useS3MetricCountObject,
  useS3MetricSizeObject,
} from './api/use-s3'

export function S3DetailsController(bucketName: string) {
  //storage global

  //state
  const { push } = useRouter()

  const { data: element, isLoading, error } = useS3Buckets(bucketName!)
  const {
    data: count,
    isLoading: countLoading,
    error: countError,
  } = useS3MetricCountObject(bucketName!)
  const {
    data: size,
    isLoading: sizeLoading,
    error: sizeError,
  } = useS3MetricSizeObject(bucketName!)

  const formatDateShort = (isoString: string): string => {
    if (!isoString) return ''
    const date = new Date(isoString)

    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  

  return {
    element,
    count,
    size,
    sizeLoading,
    sizeError,
    countLoading,
    countError,
    isLoading,
    error,
    formatDateShort,

  }
}
