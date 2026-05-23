import { useQuery } from '@tanstack/react-query'
import { S3Service } from 'app/services/s3.service'
import { BucketListType, S3ObjectListType } from 'app/types/createS3.schema'

const service = new S3Service()

function useS3List() {
  return useQuery<any>({
    queryKey: ['s3-Buckets'],
    queryFn: service.getAllS3,
  })
}

function useS3Buckets(bucketName: string) {
  return useQuery<S3ObjectListType>({
    queryKey: ['s3', bucketName],
    queryFn: () => service.getBucketS3(bucketName),
  })
}

function useS3Object(bucketName: string, objectKey: string) {
  return useQuery({
    queryKey: ['s3-details', bucketName],
    queryFn: () => service.ObjectDetails(bucketName, objectKey),
  })
}

function useS3MetricSizeObject(bucketName: string) {
  return useQuery({
    queryKey: ['s3-metricSize', bucketName],
    queryFn: () => service.getSizeMetricsBucketS3(bucketName),
  })
}

function useS3MetricCountObject(bucketName: string) {
  return useQuery({
    queryKey: ['s3-metricCount', bucketName],
    queryFn: () => service.getCountMetricsBucketS3(bucketName),
  })
}

// function useCreateEC2() {
//   const queryClient = useQueryClient()
//   const { push } = useRouter()
//   const setPending = usePendingStore((state) => state.setPending)
//   return useMutation({
//     mutationFn: (data: CreateEc2FormValues) => {
//       return service.createEc2(data)
//     },
//     onMutate: () => {
//       setPending(true)
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
//       setTimeout(() => {
//         queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
//         setPending(false)
//         push('/ec2')
//       }, 30000)
//     },
//     onError: (error) => {
//       console.log('Error en el stop instances:', error.message)
//       setPending(false)
//     },
//   })
// }

export {
  useS3Buckets,
  useS3Object,
  useS3List,
  useS3MetricCountObject,
  useS3MetricSizeObject,
}
