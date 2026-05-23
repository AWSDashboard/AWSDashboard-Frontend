import { Text, View, StyleSheet, Platform } from 'react-native'
import { ProtectedLayout } from 'app/components/privateLayout'
import { Card } from 'app/ui/Card/card'
import { responsiveStyles, styles } from 'app/styles/styles'
import { EC2CardContent } from 'app/ui/Card/EC2CardContent'
import { S3CardContent } from 'app/ui/Card/S3CardContent'
import { Button } from 'app/ui/button'
import { useRouter } from 'solito/navigation'
import { useAuthStore } from 'app/store/useAuth'

export function HomeScreen() {
  const { push } = useRouter()
  const clearLocalSession = useAuthStore((state) => state.logout)
  const handleLogOut = async () => {
    await clearLocalSession()
  }
  return (
    <ProtectedLayout>
      <View style={responsiveStyles.headerContainer}>
        <Text style={[styles.text.h1, responsiveStyles.titleText]}>
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
