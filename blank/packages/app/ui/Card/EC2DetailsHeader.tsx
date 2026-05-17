import { COLORS, styles } from 'app/styles/styles'
import { EC2Instance } from 'app/types/ec2Types'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button } from '../button'
import { Icon } from '../Icon'
import Trash2 from '../../assets/trash2.png'
import play from '../../assets/play.png'
import spin from '../../assets/rotate-ccw.png'
import pause from '../../assets/pause.png'
import { usePendingStore } from 'app/store/useCounterStore'
import {
  useResetInstance,
  useRunInstance,
  useStopInstance,
  useTerminateInstance,
} from 'app/hooks/api/use-ec2'

interface EC2DetailsHeaderProps {
  element: EC2Instance
  instanceId: string
}
export function EC2DetailsHeader({
  element,
  instanceId,
}: EC2DetailsHeaderProps) {
  const { mutate: stopInstance, isPending: isStopping } =
    useStopInstance(instanceId)
  const { mutate: runInstance, isPending: isRunning } =
    useRunInstance(instanceId)
  const { mutate: terminateInstance, isPending: isTerminating } =
    useTerminateInstance(instanceId)
  const { mutate: resetInstance, isPending: isResetting } =
    useResetInstance(instanceId)
  const { pending } = usePendingStore((state) => state)

  const isAnyActionPending =
    isStopping || isRunning || isTerminating || isResetting

  const handleStop = () => {
    stopInstance()
  }

  const handleRun = () => {
    runInstance()
  }

  const handleTerminate = () => {
    terminateInstance()
  }

  const handlereset = () => {
    resetInstance()
  }

  const statusColor = (element: EC2Instance) => {
    if (element.state === 'running') return COLORS.success300
    if (element.state === 'stopped') return COLORS.danger300
    return COLORS.primary300
  }

  return (
    <View style={[styles.card.card, styles.Headers.ec2]}>
      {/* FILA 1: Nombre (izq) y Status (der) */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 15,
        }}
      >
        <Text style={[styles.text.h2]}>{element?.name}</Text>

        <View
          style={{
            backgroundColor: statusColor(element!),
            borderRadius: 5,
            flexDirection: 'row',
          }}
        >
          <Text
            style={[
              styles.text.h4,
              { marginHorizontal: 15, marginVertical: 5 },
            ]}
          >
            {element!.state}
          </Text>
          {pending && <ActivityIndicator size="small" color={COLORS.black} />}
        </View>
      </View>

      {/* FILA 2: Botones centrados */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 10,
        }}
      >
        <Button
          variant="ghost"
          onPress={handleRun}
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.success300,
            borderRadius: 40,
          }}
        >
          <Icon asset={play} style={{ height: 20, width: 20 }} />
        </Button>

        <Button
          variant="ghost"
          onPress={handlereset}
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.primary300,
            borderRadius: 40,
          }} // Tamaño razonable para click
        >
          <Icon asset={spin} style={{ height: 20, width: 20 }} />
        </Button>

        <Button
          variant="ghost"
          onPress={handleStop}
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.primary300,
            borderRadius: 40,
          }}
        >
          <Icon asset={pause} style={{ height: 20, width: 20 }} />
        </Button>

        <Button
          variant="ghost"
          onPress={handleTerminate}
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.danger300,
            borderRadius: 40,
          }}
        >
          <Icon asset={Trash2} style={{ height: 20, width: 20 }} />
        </Button>
      </View>
    </View>
  )
}
