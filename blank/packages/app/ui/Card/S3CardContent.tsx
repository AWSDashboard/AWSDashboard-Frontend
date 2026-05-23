import { ReactNativeElement, Text, View } from 'react-native'
import { Icon } from '../Icon'
import { COLORS, styles } from 'app/styles/styles'
import S3Logo from 'app/assets/database.png'
import { S3Controller } from 'app/hooks/useS3Controller'

interface CardContentProps {
  children?: ReactNativeElement
}
export function S3CardContent({ children }: CardContentProps) {
  const {
    data,
    isLoading,
    error,
    calculateTotalFiles,
    calculateTotalSizeInMB,
  } = S3Controller()

  if (isLoading) return <Text>Cargando Buckets de AWS...</Text>
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
          <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>Buckets</Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {data?.length}
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
            Número de archivos
          </Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {calculateTotalFiles(data)}
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
            Megas totales
          </Text>
          <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
            {calculateTotalSizeInMB(data) + ' '}Mb
          </Text>
        </View>
      </View>
    </>
  )
}
