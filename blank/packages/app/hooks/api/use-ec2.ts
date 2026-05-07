import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { ec2Service } from 'app/services/ec2.service'
import { EC2InstancesResponse } from 'app/types/ec2Types'

const service = new ec2Service()

export function useEc2() {
  function useEC2Instances() {
    return useQuery<EC2InstancesResponse>({
      queryKey: ['ec2-instances'],
      queryFn: service.getAllEc2,
    })
  }

  function useStopInstance() {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: (instanceId: string) => {
        return service.stopEc2ById(instanceId)
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
    useEC2Instances,
    useStopInstance,
  }
}
