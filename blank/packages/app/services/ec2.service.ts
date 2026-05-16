import { api } from 'app/api'
import { EC2Instance, EC2InstancesResponse } from 'app/types/ec2Types'

export class ec2Service {
  constructor() {}

  async getAllEc2(): Promise<EC2InstancesResponse> {
    const { data } = await api.get('/ec2/instances', {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2(id: string): Promise<EC2Instance> {
    const { data } = await api.get(`/ec2/instances/${id}`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async stopEc2ById(instanceId: string) {
    const { data } = await api.post(
      `ec2/instances/${instanceId}/stop`,
      {},
      {
        params: { regionId: 1 },
      },
    )
    return data.body
  }

  async runEc2ById(instanceId: string) {
    const { data } = await api.post(
      `ec2/instances/${instanceId}/start`,
      {},
      {
        params: { regionId: 1 },
      },
    )
    return data.body
  }

  async resetEc2ById(instanceId: string) {
    const { data } = await api.post(
      `ec2/instances/${instanceId}/reboot`,
      {},
      {
        params: { regionId: 1 },
      },
    )
    return data.body
  }

  async terminateEc2ById(instanceId: string) {
    const { data } = await api.delete(`ec2/instances/${instanceId}`, {
      params: { regionId: 1 },
    })
    return data.body
  }

  async getEc2CPUData(id: string) {
    const { data } = await api.get(`/ec2/instances/${id}/metrics/cpu`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2ReadDiskData(id: string) {
    const { data } = await api.get(
      `/ec2/instances/${id}/metrics/disk-read-bytes`,
      {
        params: { regionId: 1 },
      },
    )
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2WriteDiskData(id: string) {
    const { data } = await api.get(
      `/ec2/instances/${id}/metrics/disk-write-bytes`,
      {
        params: { regionId: 1 },
      },
    )
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2NetworkInData(id: string) {
    const { data } = await api.get(`/ec2/instances/${id}/metrics/network-in`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2NetworkOutData(id: string) {
    const { data } = await api.get(`/ec2/instances/${id}/metrics/network-out`, {
      params: { regionId: 1 },
    })
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2NetworkPacketsInData(id: string) {
    const { data } = await api.get(
      `/ec2/instances/${id}/metrics/network-packets-in`,
      {
        params: { regionId: 1 },
      },
    )
    // console.log('respuesta de ec2', data.body)
    return data
  }

  async getEc2NetworkPacketsOutData(id: string) {
    const { data } = await api.get(
      `/ec2/instances/${id}/metrics/network-packets-out`,
      {
        params: { regionId: 1 },
      },
    )
    // console.log('respuesta de ec2', data.body)
    return data
  }
}
