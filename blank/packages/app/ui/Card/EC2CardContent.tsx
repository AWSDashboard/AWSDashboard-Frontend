import { ReactNativeElement, Text, View } from 'react-native'
import { Icon } from '../Icon'
import { COLORS, styles } from 'app/styles/styles'
import ec2Logo from 'app/assets/cpu.png'

interface CardContentProps {
  children?: ReactNativeElement
}
export function EC2CardContent({ children }: CardContentProps) {
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
            instancias
          </Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>54</Text>
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
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>54</Text>
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
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>apagadas</Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>54</Text>
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
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>consumo</Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>54</Text>
        </View>
      </View>
    </>
  )
}
