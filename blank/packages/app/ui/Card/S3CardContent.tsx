import { ReactNativeElement, Text, View } from 'react-native'
import { Icon } from '../Icon'
import { COLORS, styles } from 'app/styles/styles'
import S3Logo from 'app/assets/database.png'

interface CardContentProps {
  children?: ReactNativeElement
}
export function S3CardContent({ children }: CardContentProps) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <View style={styles.components.homeIcon}>
          <Icon asset={S3Logo} />
        </View>

        <Text style={[styles.text.h3, { marginLeft: 10 }]}>Buckets S3</Text>
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
            archivos:
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
            Gb consumidos:
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
            Carpetas:
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
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>Gasto:</Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>54.000$</Text>
        </View>
      </View>
    </>
  )
}
