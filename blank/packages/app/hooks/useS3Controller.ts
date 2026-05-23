import { useState } from 'react'
import { useRouter } from 'solito/navigation'
import { useS3Buckets, useS3List } from './api/use-s3'

export function S3Controller() {
  //storage global

  //state
  const { push } = useRouter()

  const { data, isLoading, error } = useS3List()

  const formatDateShort = (isoString: string): string => {
    if (!isoString) return ''
    const date = new Date(isoString)

    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  const calculateTotalSizeInMB = (data: any): string => {
    if (!data) return '0.00'

    const totalBytes = data.reduce((accumulator: any, bucketObj: any) => {
      const bucketName = Object.keys(bucketObj)[0]
      const files = bucketObj[bucketName!] || []

      const bucketBytes = files.reduce(
        (sum: any, file: any) => sum + file.size,
        0,
      )
      return accumulator + bucketBytes
    }, 0)

    const totalMB = totalBytes / (1024 * 1024)
    return totalMB.toFixed(2)
  }

  const calculateTotalSizeInGB = (data: any): string => {
    if (!data) return '0.00'

    const totalBytes = data.reduce((accumulator: any, bucketObj: any) => {
      const bucketName = Object.keys(bucketObj)[0]
      const files = bucketObj[bucketName!] || []

      const bucketBytes = files.reduce(
        (sum: any, file: any) => sum + file.size,
        0,
      )

      return accumulator + bucketBytes
    }, 0)

    const totalGB = totalBytes / (1024 * 1024 * 1024)
    return totalGB.toFixed(2)
  }

  const calculateTotalFiles = (data: any): number => {
    if (!data) return 0
    return data.reduce((accumulator: any, bucketObj: any) => {
      const bucketName = Object.keys(bucketObj)[0]
      const files = bucketObj[bucketName!] || []
      return accumulator + files.length
    }, 0)
  }

  const getSingleBucketSizeInMB = (files: any[]): string => {
    const totalBytes = files.reduce((sum, file) => sum + file.size, 0)
    return (totalBytes / (1024 * 1024)).toFixed(2)
  }

  const getSingleBucketFileCount = (files: any[]): number => {
    return files.length
  }

  return {
    data,
    isLoading,
    error,
    formatDateShort,
    calculateTotalFiles,
    calculateTotalSizeInMB,
    calculateTotalSizeInGB,
    getSingleBucketFileCount,
    getSingleBucketSizeInMB,
  }
}
