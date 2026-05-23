// app/components/layout.tsx
import { useEffect } from 'react'
import { View, ScrollView, Platform, StyleSheet } from 'react-native'
import { useAuthStore } from 'app/store/useAuth'

interface LayoutProps {
  children: React.ReactNode
}

export function PublicLayout({ children }: LayoutProps) {
  const isWeb = Platform.OS === 'web'

  const styles = {
    layout: StyleSheet.create({
      mainContainer: {
        flex: 1,
        flexDirection: isWeb ? 'row' : 'column',
        // En Web forzamos que el contenedor padre no crezca más que la pantalla
        height: (isWeb ? '100vh' : '100%') as any,
        overflow: 'hidden',
      },
      content: {
        flex: 1,
        // Esto es vital: el contenedor del scroll no debe salirse de la pantalla
        height: (isWeb ? '100vh' : '100%') as any,
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
    <View style={styles.layout.mainContainer}>
      <View style={styles.layout.content}>
        <ScrollView contentContainerStyle={styles.layout.scrollContainer}>
          {children}
        </ScrollView>
      </View>
    </View>
  )
}
