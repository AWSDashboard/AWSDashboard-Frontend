import { EC2Controller } from 'app/hooks/useEc2Controller'
import { COLORS, styles } from 'app/styles/styles'
import { EC2Instance } from 'app/types/ec2Types'
import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { EC2Details } from 'app/ui/Card/EC2DetailsCar'
import { EC2DetailsHeader } from 'app/ui/Card/EC2DetailsHeader'
import { Icon } from 'app/ui/Icon'
import { Layout } from 'app/ui/layout'
import { useEffect } from 'react'
import { Platform, Text, View } from 'react-native'
import { useParams } from 'solito/navigation'

export function ec2InfoScreen() {
  const { instanceId } = useParams<{ instanceId: string }>()
  const {
    useStopInstance,
    formatUptime,
    handleSetId,
    element,
    elemntLoading,
    elemntError,
  } = EC2Controller()

  useEffect(() => {
    if (instanceId) {
      handleSetId(instanceId)
    }
  }, [instanceId, handleSetId])

  if (elemntLoading)
    return (
      <Layout>
        <Text>Cargando datos de la instancia....</Text>
      </Layout>
    )
  if (elemntError)
    return (
      <Layout>
        <Text>Error del servicor: {elemntError.message}</Text>
      </Layout>
    )
  return (
    <Layout>
      <EC2DetailsHeader instanceId={instanceId!} element={element!} />
      <Card
        style={{
          ...Platform.select({
            web: {
              top: 140,
            },
          }),
        }}
      >
        <EC2Details element={element!} formatUptime={formatUptime} />
      </Card>
    </Layout>
  )
}
