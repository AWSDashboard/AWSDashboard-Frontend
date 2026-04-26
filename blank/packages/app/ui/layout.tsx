// app/components/layout.tsx
import { View, ScrollView, Platform } from 'react-native'
import { styles } from 'app/styles/styles'
import { Sidebar } from './sideBar'// Importamos la barra visual

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const isWeb = Platform.OS === 'web'

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