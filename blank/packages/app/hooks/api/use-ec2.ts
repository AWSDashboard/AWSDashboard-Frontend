import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query'

import { ec2Service } from 'app/services/ec2.service'
import { usePendingStore } from 'app/store/useCounterStore'
import { CreateEc2FormValues } from 'app/types/createEc2.schema'
import { EC2Instance, EC2InstancesResponse } from 'app/types/ec2Types'
import { useRouter } from 'solito/navigation'

const service = new ec2Service()

export const invalidateAllEC2Data = (queryClient: QueryClient) => {
  const chartKeys = [
    'ec2-instances',
    'ec2-CPUData',
    'ec2-RDiskData',
    'ec2-WDiskData',
    'ec2-NIData',
    'ec2-NOData',
    'ec2-NPIData',
    'ec2-NPOData',
  ]

  chartKeys.forEach((key) => {
    queryClient.invalidateQueries({ queryKey: [key] })
  })
}

function useEC2Instances() {
  return useQuery<EC2InstancesResponse>({
    queryKey: ['ec2-instances'],
    queryFn: service.getAllEc2,
  })
}

function useEC2Instance(id: string) {
  return useQuery<EC2Instance>({
    queryKey: ['ec2-instances', id],
    queryFn: () => service.getEc2(id),
  })
}

function useEC2CPUData(id: string) {
  return useQuery({
    queryKey: ['ec2-CPUData', id],
    queryFn: () => service.getEc2CPUData(id),
  })
}

function useEC2ReadDiskData(id: string) {
  return useQuery({
    queryKey: ['ec2-RDiskData', id],
    queryFn: () => service.getEc2ReadDiskData(id),
  })
}

function useEC2WriteDiskData(id: string) {
  return useQuery({
    queryKey: ['ec2-WDiskData', id],
    queryFn: () => service.getEc2WriteDiskData(id),
  })
}

function useEC2NetworkInData(id: string) {
  return useQuery({
    queryKey: ['ec2-NIData', id],
    queryFn: () => service.getEc2NetworkInData(id),
  })
}

function useEC2NetworkOutData(id: string) {
  return useQuery({
    queryKey: ['ec2-NOData', id],
    queryFn: () => service.getEc2NetworkOutData(id),
  })
}

function useEC2NetworkPacketsInData(id: string) {
  return useQuery({
    queryKey: ['ec2-NPIData', id],
    queryFn: () => service.getEc2NetworkPacketsInData(id),
  })
}

function useEC2NetworkPacketsOutData(id: string) {
  return useQuery({
    queryKey: ['ec2-NPOData', id],
    queryFn: () => service.getEc2NetworkPacketsOutData(id),
  })
}

function useCreateEC2() {
  const queryClient = useQueryClient()
  const { push } = useRouter()
  const setPending = usePendingStore((state) => state.setPending)
  return useMutation({
    mutationFn: (data: CreateEc2FormValues) => {
      return service.createEc2(data)
    },
    onMutate: () => {
      setPending(true)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        setPending(false)
        push('/ec2')
      }, 30000)
    },
    onError: (error) => {
      console.log('Error en el stop instances:', error.message)
      setPending(false)
    },
  })
}

function useResetInstance(id: string) {
  const queryClient = useQueryClient()
  const setPending = usePendingStore((state) => state.setPending)

  return useMutation({
    mutationFn: () => {
      return service.resetEc2ById(id)
    },
    onMutate: () => {
      setPending(true)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })

      setTimeout(() => {
        invalidateAllEC2Data(queryClient)
        setPending(false)
      }, 30000)
    },
    onError: (error) => {
      console.log('Error en el stop instances:', error.message)
    },
  })
}

function useStopInstance(id: string) {
  const queryClient = useQueryClient()
  const { setPending } = usePendingStore((state) => state)

  return useMutation({
    mutationFn: () => {
      return service.stopEc2ById(id)
    },

    onMutate: () => {
      setPending(true)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
      setPending(true)
      setTimeout(() => {
        invalidateAllEC2Data(queryClient)
        setPending(false)
      }, 30000)
    },
    onError: (error) => {
      console.log('Error en el stop instances:', error.message)
    },
  })
}

function useRunInstance(id: string) {
  const queryClient = useQueryClient()
  const { setPending } = usePendingStore((state) => state)

  return useMutation({
    mutationFn: () => {
      return service.runEc2ById(id)
    },

    onMutate: () => {
      setPending(true)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
      setPending(true)
      setTimeout(() => {
        invalidateAllEC2Data(queryClient)
        setPending(false)
      }, 30000)
    },
    onError: (error) => {
      console.log('Error en el stop instances:', error.message)
    },
  })
}

function useTerminateInstance(id: string) {
  const queryClient = useQueryClient()
  const { setPending } = usePendingStore((state) => state)

  return useMutation({
    mutationFn: () => {
      return service.terminateEc2ById(id)
    },

    onMutate: () => {
      setPending(true)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
      setPending(true)
      setTimeout(() => {
        invalidateAllEC2Data(queryClient)
        setPending(false)
      }, 30000)
    },
    onError: (error) => {
      console.log('Error en el stop instances:', error.message)
    },
  })
}
export {
  useTerminateInstance,
  useRunInstance,
  useEC2Instances,
  useStopInstance,
  useEC2Instance,
  useResetInstance,
  useEC2CPUData,
  useEC2NetworkInData,
  useEC2NetworkOutData,
  useEC2NetworkPacketsInData,
  useEC2NetworkPacketsOutData,
  useEC2ReadDiskData,
  useEC2WriteDiskData,
  useCreateEC2,
}
