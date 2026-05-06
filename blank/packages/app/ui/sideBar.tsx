// app/components/sidebar.tsx
import {
  View,
  Text,
  Image,
  ImageBackground,
  ImageBackgroundBase,
} from 'react-native'
import { AWS_COLORS, COLORS, styles } from 'app/styles/styles'
import { Button } from './button'
import { useRouter } from 'solito/navigation'
import DatabaseIcon from 'app/assets/database.png'
import homeIcon from 'app/assets/house.png'
import ec2Icon from 'app/assets/cpu.png'
import { Icon } from './Icon'

export function Sidebar() {
  const { push, replace, back } = useRouter()
  // const DatabaseIcon = require('app/assets/database.png')
  const resolveAsset = (asset: any) => {
    if (typeof asset === 'object' && asset.src) return asset.src
    console.log('aset ', asset)
    return asset
  }
  return (
    <View style={styles.sidebar.container}>
      <View style={styles.sidebar.card}>
        <Button
          onPress={() => {
            push('/ec2')
          }}
          variant="ghost"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          }}
        >
          <Icon asset={ec2Icon} />
          <Text style={[styles.text.h5, { marginTop: 5 }]}>EC2</Text>
        </Button>
      </View>
      <View style={styles.sidebar.card}>
        <Button
          onPress={() => {
            push('/')
          }}
          variant="ghost"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          }}
        >
          <Icon asset={homeIcon} />
          <Text style={[styles.text.h5, { marginTop: 5 }]}>Home</Text>
        </Button>
      </View>
      <View style={styles.sidebar.card}>
        <Button
          onPress={() => {
            push('/s3')
          }}
          variant="ghost"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          }}
        >
          <Icon asset={DatabaseIcon} />
          <Text style={[styles.text.h5, { marginTop: 5 }]}>S3</Text>
        </Button>
      </View>
      {/* <View style={styles.sidebar.card}>
        <Button onPress={() => {}} variant="ghost">
          <Text>🔍</Text>
        </Button>
      </View> */}
    </View>
  )
}
