import { useState } from 'react'
import {
  useEC2CPUData,
  useEC2NetworkInData,
  useEC2NetworkOutData,
  useEC2NetworkPacketsInData,
  useEC2NetworkPacketsOutData,
  useEC2ReadDiskData,
  useEC2WriteDiskData,
} from './api/use-ec2'


export function EC2ChartController(id: string) {
  const [isIn, setIsIn] = useState<boolean>(true)

  const toggleInOutData = () => {
    if (isIn) {
      setIsIn(false)
    } else {
      setIsIn(true)
    }
  }

  //Gráficas
  const {
    data: ec2CPUData,
    isLoading: ec2CPULoading,
    error: ec2CPUError,
  } = useEC2CPUData(id!)

  const {
    data: ec2NetworkInData,
    isLoading: ec2NetworkInLoading,
    error: ec2NetworkInError,
  } = useEC2NetworkInData(id!)

  const {
    data: ec2NetworkOutData,
    isLoading: ec2NetworkOutLoading,
    error: ec2NetworkOutError,
  } = useEC2NetworkOutData(id!)

  const {
    data: ec2NetworkPacketsInData,
    isLoading: ec2NetworkPacketsInLoading,
    error: ec2NetworkPacketsInError,
  } = useEC2NetworkPacketsInData(id!)

  const {
    data: ec2NetworkPacketsOutData,
    isLoading: ec2NetworkPacketsOutLoading,
    error: ec2NetworkPacketsOutError,
  } = useEC2NetworkPacketsOutData(id!)

  const {
    data: ec2ReadDiskData,
    isLoading: ec2ReadDiskLoading,
    error: ec2ReadDiskError,
  } = useEC2ReadDiskData(id!)

  const {
    data: ec2WriteDiskData,
    isLoading: ec2WriteDiskLoading,
    error: ec2WriteDiskError,
  } = useEC2WriteDiskData(id!)

  return {
    ec2CPUData,
    ec2NetworkInData,
    ec2NetworkOutData,
    ec2NetworkPacketsInData,
    ec2NetworkPacketsOutData,
    ec2ReadDiskData,
    ec2WriteDiskData,
    chartLoading:
      ec2CPULoading ||
      ec2NetworkInLoading ||
      ec2NetworkOutLoading ||
      ec2NetworkPacketsInLoading ||
      ec2NetworkPacketsOutLoading ||
      ec2ReadDiskLoading ||
      ec2WriteDiskLoading,
    chartError:
      ec2CPUError ||
      ec2NetworkInError ||
      ec2NetworkOutError ||
      ec2NetworkPacketsInError ||
      ec2NetworkPacketsOutError ||
      ec2ReadDiskError ||
      ec2WriteDiskError,
    isIn,
    toggleInOutData,
  }
}
