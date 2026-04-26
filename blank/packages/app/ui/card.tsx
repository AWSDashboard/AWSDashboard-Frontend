// packages/app/ui/card.tsx
import { View, ViewStyle, StyleProp } from 'react-native'
import { styles } from 'app/styles/styles'

interface CardProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle> // Permite añadir estilos extra desde fuera
}

export function Card({ children, style }: CardProps) {
  return (
    // Combinamos el estilo base con el que venga por props
    <View style={[styles.card.card, style]}>{children}</View>
  )
}
