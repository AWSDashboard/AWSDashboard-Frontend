import { EC2Controller } from 'app/hooks/useEc2Controller'
import { Card } from 'app/ui/Card/card'
import { EC2Charts } from 'app/ui/Card/EC2CardCharts'
import { EC2Details } from 'app/ui/Card/EC2DetailsCar'
import { EC2DetailsHeader } from 'app/ui/Card/EC2DetailsHeader'

import { ProtectedLayout } from 'app/components/privateLayout'
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
      <ProtectedLayout>
        <Text>Cargando datos de la instancia....</Text>
      </ProtectedLayout>
    )
  if (elemntError)
    return (
      <ProtectedLayout>
        <Text>Error del servicor: {elemntError.message}</Text>
      </ProtectedLayout>
    )
  return (
    <ProtectedLayout>
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
    </ProtectedLayout>
  )
}
