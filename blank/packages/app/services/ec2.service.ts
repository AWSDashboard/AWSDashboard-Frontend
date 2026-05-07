import { api } from 'app/api'
import { EC2InstancesResponse } from 'app/types/ec2Types'

export class ec2Service {
  constructor() {}

  async getAllEc2(): Promise<EC2InstancesResponse> {
    const { data } = await api.get('/ec2/instances', {
      params: { regionId: 1 },
    })
    console.log('respuesta de ec2', data.body)
    return data
  }

  async stopEc2ById(instanceId: string) {
    const { data } = await api.post(`/ec2/stop/${instanceId}`)
    return data.body
  }
}
