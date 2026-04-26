// app/components/sidebar.tsx
import { View, Text } from 'react-native'
import { styles } from 'app/styles/styles'
import { Button } from './button'

export function Sidebar() {
  return (
    <View style={styles.sidebar.container}>
      <View style={styles.sidebar.card}>
        <Button onPress={() => {}} variant="ghost">
          <Text>🔍</Text>
        </Button>
      </View>
      <View style={styles.sidebar.card}>
        <Button onPress={() => {}} variant="ghost">
          <Text>🔍</Text>
        </Button>
      </View>
      <View style={styles.sidebar.card}>
        <Button onPress={() => {}} variant="ghost">
          <Text>🔍</Text>
        </Button>
      </View>
      <View style={styles.sidebar.card}>
        <Button onPress={() => {}} variant="ghost">
          <Text>🔍</Text>
        </Button>
      </View>
    </View>
  )
}
