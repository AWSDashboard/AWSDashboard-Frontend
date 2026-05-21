import { api } from 'app/api'
import { SignInResponseType, SignInType } from 'app/types/auth.schema'

export class authService {
  constructor() {}

  async signUp(credentials: SignInType): Promise<SignInResponseType> {
    const { data } = await api.post('/auth/register', credentials)

    return data
  }

  async signIn(credentials: SignInType): Promise<SignInResponseType> {
    const { data } = await api.post('/auth/login', credentials)
    return data
  }

  async logOut(): Promise<any> {
    const { data } = await api.post('/auth/login')
    return data
  }

  async awsCredentials(credentials: any): Promise<any> {
    const { data } = await api.post('/aws/credentials', credentials)
    return data
  }
}
