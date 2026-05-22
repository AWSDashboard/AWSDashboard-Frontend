// app/components/layout.tsx
import { useEffect } from 'react'
import { View, ScrollView, Platform, StyleSheet } from 'react-native'
import { useAuthStore } from 'app/store/useAuth'
import { ProtectedRoute } from './ProtectedRoute'
import { Sidebar } from './sideBar'

interface LayoutProps {
  children: React.ReactNode
}

export function ProtectedLayout({ children }: LayoutProps) {
  const isWeb = Platform.OS === 'web'
  const initializeAuth = useAuthStore((state) => state.initializeAuth)
  // Arrancamos la comprobación de sesión en cuanto se carga el Layout
  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  const styles = {
    layout: StyleSheet.create({
      mainContainer: {
        flex: 1,
        flexDirection: isWeb ? 'row' : 'column',
        // En Web forzamos que el contenedor padre no crezca más que la pantalla
        height: isWeb ? '100vh' : '100%',
        overflow: 'hidden',
      },
      content: {
        flex: 1,
        // Esto es vital: el contenedor del scroll no debe salirse de la pantalla
        height: isWeb ? '100vh' : '100%',
        margin: isWeb ? 10 : 15,
        paddingTop: isWeb ? 0 : 0,
        padding: isWeb ? 0 : 0,
      },
      scrollContainer: {
        flexGrow: 1,
        paddingBottom: !isWeb ? 80 : 20, // Espacio para la Sidebar en móvil
        right: 0,
      },
    }),
  } as const

  return (
    <ProtectedRoute>
      <View style={styles.layout.mainContainer}>
        {isWeb && <Sidebar />}

        <View style={styles.layout.content}>
          <ScrollView contentContainerStyle={styles.layout.scrollContainer}>
            {children}
          </ScrollView>
        </View>

        {!isWeb && <Sidebar />}
      </View>
    </ProtectedRoute>
  )
}
