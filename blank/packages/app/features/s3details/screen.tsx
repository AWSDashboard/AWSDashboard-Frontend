import { ProtectedLayout } from 'app/components/privateLayout'
import { S3DetailsController } from 'app/hooks/useS3DetailsController'
import { COLORS, responsiveStyles, styles } from 'app/styles/styles'
import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { Icon } from 'app/ui/Icon'
import { useState } from 'react'
import {
  ActivityIndicator,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useParams } from 'solito/navigation'
import rotate from 'app/assets/rotate-ccw.png'
import { UniversalBlockChart } from 'app/ui/chart'

export function S3Details() {
  const { bucketName } = useParams()
  const [isgraphics, setIsGraphics] = useState<boolean>(false)

  const handleToggleGraphics = () => {
    setIsGraphics(!isgraphics)
  }

  const {
    element,
    isLoading,
    error,
    count,
    countError,
    countLoading,
    size,
    sizeError,
    sizeLoading,
  } = S3DetailsController(bucketName as string)

  const { width } = useWindowDimensions()
  const isWebOrTablet = width > 768
  const itemStyle = {
    width: isWebOrTablet ? '48%' : '100%',
    marginBottom: 20,
  } as const

  if (isLoading)
    return (
      <ProtectedLayout>
        <Text>Cargando archivos de AWS...</Text>
      </ProtectedLayout>
    )

  if (error)
    return (
      <ProtectedLayout>
        <Text>Error de conexión {`Error: ${error.message}`}</Text>
      </ProtectedLayout>
    )

  return (
    <ProtectedLayout>
      <View>
        <View style={responsiveStyles.headerContainer}>
          <Text style={styles.text.h2}>
            {`Listado de archivos del bucket: ${bucketName}`}
          </Text>

          <Button
            variant="primary"
            onPress={() => {
              handleToggleGraphics()
            }}
          >
            <Text>{isgraphics ? 'Objetos' : 'Gráficas'}</Text>
          </Button>
        </View>

        {isgraphics ? (
          <>
            <View style={{ padding: 10 }}>
              <Button
                variant="ghost"
                style={{ margin: 5 }}
                // onPress={invalidateChartData}
                onPress={() => {}}
              >
                {countLoading ? (
                  <ActivityIndicator size="small" color={COLORS.black} />
                ) : (
                  <Icon asset={rotate} style={{}} />
                )}

                <Text> Actualizar gráficas</Text>
              </Button>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: 10,
              }}
            >
              <View style={itemStyle}>
                <UniversalBlockChart
                  axisX={{ nombre: 'Tiempo', unidad: 'h:m' }}
                  axisY={{ nombre: 'Unidades', unidad: 'u' }}
                  data={count!}
                  title="Número de archivos"
                  color={COLORS.primary600}
                />
              </View>
              <View style={itemStyle}>
                <UniversalBlockChart
                  axisX={{ nombre: 'Tiempo', unidad: 'h:m' }}
                  axisY={{ nombre: 'GigaBytes', unidad: 'Gb' }}
                  data={size!}
                  title="Tamaño de archivos"
                  color={COLORS.primary600}
                />
              </View>
            </View>
          </>
        ) : (
          element?.map((item) => {
            return (
              <Card key={item.key}>
                <View>
                  <Text style={styles.text.h3}>
                    {item.key ? item.key : '-'}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    flex: 1,
                    gap: 10,
                    flexDirection: 'column',
                    marginBottom: 15,
                  }}
                >
                  <View style={[styles.card.muttedContent]}>
                    <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                      Tamaño
                    </Text>
                    <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                      {item.size !== undefined
                        ? `${(item.size / 1024).toFixed(2)} KB`
                        : '-'}
                    </Text>
                  </View>

                  <View style={[styles.card.muttedContent]}>
                    <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                      Última modificación
                    </Text>
                    <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                      {item.lastModified ? item.lastModified : '-'}
                    </Text>
                  </View>

                  <View style={[styles.card.muttedContent]}>
                    <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                      Clase de almacenamiento
                    </Text>
                    <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                      {item.storageClass ? item.storageClass : '-'}
                    </Text>
                  </View>

                  <View style={[styles.card.muttedContent]}>
                    <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                      Tipo de contenido
                    </Text>
                    <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                      {item.contentType ? item.contentType : '-'}
                    </Text>
                  </View>

                  <View style={[styles.card.muttedContent]}>
                    <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                      ETag
                    </Text>
                    <Text
                      style={[
                        styles.text.fontMd,
                        { marginRight: 15, flex: 1, textAlign: 'right' },
                      ]}
                      numberOfLines={1}
                    >
                      {item.etag ? item.etag : '-'}
                    </Text>
                  </View>

                  {item.content && (
                    <View
                      style={[
                        styles.card.muttedContent,
                        {
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          paddingVertical: 10,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.text.fontMd,
                          { marginLeft: 15, marginBottom: 5 },
                        ]}
                      >
                        Vista previa del contenido
                      </Text>
                      <Text
                        style={[
                          styles.text.fontMd,
                          { marginLeft: 15, marginRight: 15, color: '#666' },
                        ]}
                        numberOfLines={3}
                      >
                        {item.content}
                      </Text>
                    </View>
                  )}
                </View>
              </Card>
            )
          })
        )}
      </View>
    </ProtectedLayout>
  )
}
