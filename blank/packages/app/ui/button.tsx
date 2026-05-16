// packages/app/ui/button.tsx
import { Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import { styles } from 'app/styles/styles'

interface ButtonProps {
  children?: React.ReactNode
  onPress: () => void
  variant?: 'submit' | 'ghost' | 'link' | 'primary' // Nuestras variantes
  style?: StyleProp<ViewStyle> // Para ajustes extra (como márgenes)
}

export function Button({
  children,
  onPress,
  variant = 'submit',
  style,
}: ButtonProps) {
  // 1. Seleccionamos el estilo del contenedor
  const buttonStyle = [
    styles.button.base,
    variant === 'submit' && styles.button.submit,
    variant === 'ghost' && styles.button.ghost,
    variant === 'link' && styles.button.link,
    variant === 'primary' && styles.button.primary,
    style, // Estilo extra manual
  ]

  // 2. Seleccionamos el estilo del texto
  const textStyle =
    variant === 'submit'
      ? styles.button.textSubmit
      : variant === 'ghost'
        ? styles.button.textGhost
        : styles.button.textLink

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      activeOpacity={0.7} // Efecto visual al pulsar
    >
      {children}
    </TouchableOpacity>
  )
}
