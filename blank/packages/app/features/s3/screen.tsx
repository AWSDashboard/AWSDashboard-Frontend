import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { ProtectedLayout } from 'app/components/privateLayout'
import { View, Text, Pressable } from 'react-native'
import { useRouter, useSearchParams } from 'solito/navigation'
import { S3Controller } from 'app/hooks/useS3Controller'
import { COLORS, responsiveStyles, styles } from 'app/styles/styles'

export function S3Screen() {
  const router = useRouter()
  const {
    data,
    formatDateShort,
    getSingleBucketFileCount,
    getSingleBucketSizeInMB,
  } = S3Controller()

  return (
    <ProtectedLayout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          marginBottom: 15,
        }}
      >
        <Text style={[styles.text.h1]}> Buckets </Text>
      </View>

      {data?.map((bucketObj: any, index: any) => {
        const bucketName = Object.keys(bucketObj)[0]
        const files = bucketObj[bucketName!]
        const referenceDate = files.length > 0 ? files[0].lastModified : null

        return (
          <Card key={index} link={`/s3details/${bucketName}`}>
            <View style={responsiveStyles.headerContainer}>
              <Text style={[styles.text.h2]}>{bucketName}</Text>

              <Text style={[styles.text.muted]}>
                {referenceDate
                  ? formatDateShort(referenceDate)
                  : `${files.length} archivos`}
              </Text>
            </View>
            <View style={[styles.card.muttedContent, { marginTop: 10 }]}>
              <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                Número total de archivos
              </Text>
              <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                {getSingleBucketFileCount(files)}
              </Text>
            </View>
            <View style={[styles.card.muttedContent, { marginTop: 10 }]}>
              <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                Tamaño total del bucket
              </Text>
              <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                {getSingleBucketSizeInMB(files) + ' '}Mb
              </Text>
            </View>
          </Card>
        )
      })}
    </ProtectedLayout>
  )
}
