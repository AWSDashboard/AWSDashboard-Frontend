import { useState } from 'react'
import { useEC2Instance, useEC2Instances } from './api/use-ec2'

export function EC2Controller() {
  //storage global

  //state
  const [id, setId] = useState<string>()

  const { data, isLoading, error } = useEC2Instances()

  const {
    data: element,
    isLoading: elemntLoading,
    error: elemntError,
  } = useEC2Instance(id!)

  //instances
  const countInitiateEc2 =
    data?.filter((instance) => instance.state === 'running').length ?? 0

  const countStoppedEc2 =
    data?.filter((instance) => instance.state === 'stopped').length ?? 0

  const countInstances = data?.length

  //details
  const handleSetId = (id: string) => {
    setId(id)
  }

  const formatUptime = (launchTime: string): string => {
    const launch = new Date(launchTime).getTime()
    const now = new Date().getTime()

    // Diferencia en milisegundos
    const diffInMs = now - launch

    // Cálculos
    const seconds = Math.floor(diffInMs / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ${hours % 24}h`
    if (hours > 0) return `${hours}h ${minutes % 60}m`
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`

    return `${seconds}s`
  }
  return {
    useEC2Instances,
    handleSetId,
    formatUptime,
    element,
    elemntLoading,
    elemntError,
    countInitiateEc2,
    countStoppedEc2,
    countInstances,
    data,
    isLoading,
    error,
  }
}
