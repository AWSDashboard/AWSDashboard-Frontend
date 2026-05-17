import { EC2Controller } from 'app/hooks/useEc2Controller'
import { Card } from 'app/ui/Card/card'
import { EC2Charts } from 'app/ui/Card/EC2CardCharts'
import { EC2Details } from 'app/ui/Card/EC2DetailsCar'
import { EC2DetailsHeader } from 'app/ui/Card/EC2DetailsHeader'

import { Layout } from 'app/ui/layout'
import { useEffect } from 'react'
import { Platform, Text } from 'react-native'
import { useParams } from 'solito/navigation'

export function ec2InfoScreen() {
  const { instanceId } = useParams<{ instanceId: string }>()
  const { formatUptime, handleSetId, element, elemntLoading, elemntError } =
    EC2Controller()

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
        <EC2Charts instanceId={instanceId} />
      </Card>
    </Layout>
  )
}
