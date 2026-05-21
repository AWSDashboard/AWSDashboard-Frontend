import { api } from 'app/api'
import { SignInResponseType, SignInType } from 'app/types/auth.schema'
import { CreateEc2FormValues } from 'app/types/createEc2.schema'
import { EC2Instance, EC2InstancesResponse } from 'app/types/ec2Types'

export class authService {
  constructor() {}

  async signUp(credentials: SignInType): Promise<SignInResponseType> {
    const { data } = await api.post('/auth/signup', { credentials })

    return data
  }

  async signIn(credentials: SignInType): Promise<SignInResponseType> {
    const { data } = await api.post('/auth/signin', { credentials })
    return data
  }
}
