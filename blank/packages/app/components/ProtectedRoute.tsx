import { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useRouter } from 'solito/navigation'
import { useAuthStore } from 'app/store/useAuth'
import { COLORS } from 'app/styles/styles'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isLoading = useAuthStore((state) => state.isLoading)

  const { replace } = useRouter()

  useEffect(() => {
    //mientras carga estamos en login, para evitar parpadeos
    if (!isLoading && !isAuthenticated) {
      replace('/login')
    }
  }, [isLoading, isAuthenticated, replace])

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0efef',
        }}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  // si no esta autenticado con el token devolvemos null
  if (!isAuthenticated) {
    return null
  }

  // Si esta autenticado dejamos pasar a las vistas
  return <>{children}</>
}
