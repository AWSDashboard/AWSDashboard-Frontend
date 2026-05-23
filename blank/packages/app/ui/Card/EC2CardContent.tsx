import { ReactNativeElement, Text, View } from 'react-native'
import { Icon } from '../Icon'
import { COLORS, styles } from 'app/styles/styles'
import ec2Logo from 'app/assets/cpu.png'
import { EC2Controller } from 'app/hooks/useEc2Controller'

interface CardContentProps {
  children?: ReactNativeElement
}
export function EC2CardContent({ children }: CardContentProps) {
  const {
    countInitiateEc2,
    countStoppedEc2,
    countInstances,
    data,
    isLoading,
    error,
  } = EC2Controller()

  if (isLoading) return <Text>Cargando instancias de AWS...</Text>
  if (error) return <Text>Error de conexión {`Error: ${error.message}`}</Text>

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <View style={styles.components.homeIcon}>
          <Icon asset={ec2Logo} />
        </View>

        <Text style={[styles.text.h3, { marginLeft: 10 }]}>Instancias EC2</Text>
      </View>
      <View
        style={{
          marginLeft: 50,
          padding: 10,
          flex: 1,
          gap: 10,
          flexDirection: 'column',
        }}
      >
        <View
          style={[
            {
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: COLORS.gray300,
              borderRadius: 5,
            },
          ]}
        >
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
            Instancias
          </Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {countInstances}
          </Text>
        </View>
        <View
          style={[
            {
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: COLORS.gray300,
              borderRadius: 5,
            },
          ]}
        >
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
            Encendidas
          </Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {countInitiateEc2}
          </Text>
        </View>
        <View
          style={[
            {
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: COLORS.gray300,
              borderRadius: 5,
            },
          ]}
        >
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>Apagadas</Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {countStoppedEc2}
          </Text>
        </View>
      </View>
    </>
  )
}
