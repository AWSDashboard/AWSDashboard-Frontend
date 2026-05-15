import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { ec2Service } from 'app/services/ec2.service'
import { EC2Instance, EC2InstancesResponse } from 'app/types/ec2Types'

const service = new ec2Service()

export function useEc2() {
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

  function useResetInstance(id: string) {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: () => {
        return service.resetEc2ById(id)
      },

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        }, 60000)
      },
      onError: (error) => {
        console.log('Error en el stop instances:', error.message)
      },
    })
  }

  function useStopInstance(id: string) {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: () => {
        return service.stopEc2ById(id)
      },

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        }, 60000)
      },
      onError: (error) => {
        console.log('Error en el stop instances:', error.message)
      },
    })
  }

  function useRunInstance(id: string) {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: () => {
        return service.runEc2ById(id)
      },

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
        }, 60000)
      },
      onError: (error) => {
        console.log('Error en el stop instances:', error.message)
      },
    })
  }

  function useTerminateInstance(id: string) {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: () => {
        return service.terminateEc2ById(id)
      },

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['ec2-instances'] })
      },
      onError: (error) => {
        console.log('Error en el stop instances:', error.message)
      },
    })
  }
  return {
    useTerminateInstance,
    useRunInstance,
    useEC2Instances,
    useStopInstance,
    useEC2Instance,
    useResetInstance,
  }
}
