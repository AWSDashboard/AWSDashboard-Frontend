import { Text, View, StyleSheet, Platform } from 'react-native'
import { Layout } from 'app/ui/layout'
import { Card } from 'app/ui/Card/card'
import { styles } from 'app/styles/styles'
import { EC2CardContent } from 'app/ui/Card/EC2CardContent'
import { S3CardContent } from 'app/ui/Card/S3CardContent'

export function HomeScreen() {
  return (
    <Layout>
      <Text style={styles.text.h1}>
        Bienvenido a la consola multiplataforma de AWS
      </Text>
      <Card link="/ec2">
        <EC2CardContent />
      </Card>
      <Card link="/s3">
        <S3CardContent />
      </Card>
    </Layout>
  )
}
