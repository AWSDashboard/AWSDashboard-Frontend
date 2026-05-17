// app/components/layout.tsx
import { View, ScrollView, Platform, StyleSheet } from 'react-native'
import { styles } from 'app/styles/styles'
import { Sidebar } from './sideBar' // Importamos la barra visual

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const isWeb = Platform.OS === 'web'

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
    <View style={styles.layout.mainContainer}>
      {/* 1. En Web, la Sidebar va a la izquierda */}
      {isWeb && <Sidebar />}

      {/* 2. El contenido principal en el medio (con scroll) */}
      <View style={styles.layout.content}>
        <ScrollView contentContainerStyle={styles.layout.scrollContainer}>
          {children}
        </ScrollView>
      </View>

      {/* 3. En Móvil, la Sidebar va abajo del todo */}
      {!isWeb && <Sidebar />}
    </View>
  )
}
