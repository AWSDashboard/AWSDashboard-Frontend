import { useEc2 } from './api/use-ec2'

export function EC2Controller() {
  //storage global

  //service
  const { useEC2Instances, useStopInstance } = useEc2()

  const { data, isLoading, error } = useEC2Instances()

  //utils
  const countInitiateEc2 =
    data?.filter((instance) => instance.state === 'running').length ?? 0

  const countStoppedEc2 =
    data?.filter((instance) => instance.state === 'stopped').length ?? 0

  const countInstances = data?.length

  return {
    useEC2Instances,
    useStopInstance,
    countInitiateEc2,
    countStoppedEc2,
    countInstances,
    data,
    isLoading,
    error,
  }
}
