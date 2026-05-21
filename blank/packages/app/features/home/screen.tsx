import { Text, View, StyleSheet, Platform } from 'react-native'
import { ProtectedLayout } from 'app/components/privateLayout'
import { Card } from 'app/ui/Card/card'
import { styles } from 'app/styles/styles'
import { EC2CardContent } from 'app/ui/Card/EC2CardContent'
import { S3CardContent } from 'app/ui/Card/S3CardContent'
import { Button } from 'app/ui/button'
import { useLogOut } from 'app/hooks/api/use-auth'

export function HomeScreen() {
  const { mutate } = useLogOut()
  const handleLogOut = () => {
    mutate()
  }
  return (
    <ProtectedLayout>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <Text style={styles.text.h1}>
          Bienvenido a la consola multiplataforma de AWS
        </Text>

        <Button variant="primary" onPress={() => handleLogOut()}>
          <Text>Cerrar sesión</Text>
        </Button>
      </View>
      <Card link="/ec2">
        <EC2CardContent />
      </Card>
      <Card link="/s3">
        <S3CardContent />
      </Card>
    </ProtectedLayout>
  )
}
