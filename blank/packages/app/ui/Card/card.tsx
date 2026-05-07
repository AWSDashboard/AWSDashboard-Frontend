// packages/app/ui/card.tsx
import { View, ViewStyle, StyleProp } from 'react-native'
import { COLORS, styles } from 'app/styles/styles'
import { Button } from '../button'
import { useRouter } from 'solito/navigation'

interface CardProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  link?: string 
}

export function Card({ children, style, link }: CardProps) {
  const { push, replace, back } = useRouter()

  const content = <View style={[styles.card.card, style]}>{children}</View>

  return link ? (
    <Button
      variant="ghost"
      onPress={() => push(link)}
      style={{ padding: 0, backgroundColor: '#0000' }}
    >
      {content}
    </Button>
  ) : (
    content
  )
}
