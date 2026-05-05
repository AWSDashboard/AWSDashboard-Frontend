import { Text, View, StyleSheet } from 'react-native'
import { useCounterStore } from 'app/store/useCounterStore' // Tu Store
import { Layout } from 'app/ui/layout'
import { styles } from '../../styles/styles'
import { Card } from 'app/ui/card'
import { Button } from 'app/ui/button'

export function HomeScreen() {
  const { count, inc } = useCounterStore()

  return (
    <Layout>
      <Card>
        <Text style={{ fontSize: 24, margin: 20 }}>
          Contador Zustand: {count}
        </Text>
        <Button variant="submit" onPress={inc} > <Text>sumar</Text></Button>
      </Card>
    </Layout>
  )
}
