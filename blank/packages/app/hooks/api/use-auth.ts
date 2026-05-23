import { useMutation } from '@tanstack/react-query'
import { authService } from 'app/services/auth.service'
import { useAuthStore } from 'app/store/useAuth'
import { SignInType, SignUpType } from 'app/types/auth.schema'

import { EC2InstancesResponse } from 'app/types/ec2Types'
import { useRouter } from 'solito/navigation'

const service = new authService()

function useSignIn() {
  const { replace } = useRouter()
  const setLoginToken = useAuthStore((state) => state.login)

  return useMutation({
    mutationFn: (data: SignInType) => service.signIn(data),
    onSuccess: async (data) => {
      await setLoginToken(data.token)
      replace('/')
    },
    onError: (error) => {
      // Manejo de errores (mostrar un toast, alerta, etc.)
      console.log('Falló la autenticación:', error)
    },
  })
}

function useSignUp() {
  const { replace } = useRouter()
  const setLoginToken = useAuthStore((state) => state.login)

  return useMutation({
    mutationFn: (data: SignInType) => service.signUp(data),
    onSuccess: async (data) => {
      await setLoginToken(data.token)
      replace('/')
    },
    onError: (error) => {
      // Manejo de errores (mostrar un toast, alerta, etc.)
      console.log('Falló la autenticación:', error)
    },
  })
}

function useAwsCredentials() {
  const { push } = useRouter()

  return useMutation({
    mutationFn: (data: any) => service.awsCredentials(data),
    onSuccess: () => {
      push('/')
    },
    onError: (error) => {
      // Manejo de errores (mostrar un toast, alerta, etc.)
      console.log('Falló la autenticación:', error)
    },
  })
}

export { useSignIn, useSignUp, useAwsCredentials }
