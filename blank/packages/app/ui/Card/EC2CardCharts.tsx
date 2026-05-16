import { Text, useWindowDimensions, View } from 'react-native'
import { UniversalBlockChart } from '../chart'
import { COLORS } from 'app/styles/styles'
import { EC2ChartController } from 'app/hooks/useEc2ChartController'
import { Button } from '../button'
import chartColumn from '../../assets/chart-column.png'
import rotate from '../../assets/rotate-ccw.png'
import { Icon } from '../Icon'
import { useQueryClient } from '@tanstack/react-query'
import { invalidateAllEC2Data } from 'app/hooks/api/use-ec2'

interface EC2ChartProps {
  instanceId: string
}
export function EC2Charts({ instanceId }: EC2ChartProps) {
  const {
    ec2CPUData,
    ec2NetworkInData,
    ec2NetworkOutData,
    ec2NetworkPacketsInData,
    ec2NetworkPacketsOutData,
    ec2ReadDiskData,
    ec2WriteDiskData,
    chartLoading,
    chartError,
    isIn,
    toggleInOutData,
  } = EC2ChartController(instanceId)

  const queryClient = useQueryClient()

  const invalidateChartData = () => {
    invalidateAllEC2Data(queryClient)
  }

  const { width } = useWindowDimensions()
  const isWebOrTablet = width > 768
  const itemStyle = {
    width: isWebOrTablet ? '48%' : '100%',
    marginBottom: 20,
  } as const

  return (
    <>
      <View style={{ margin: 5 }}>
        <Button variant="ghost" style={{ margin: 5 }} onPress={toggleInOutData}>
          <Icon asset={chartColumn} style={{}} />
          <Text> Cambiar gráficas</Text>
        </Button>
        <Button
          variant="ghost"
          style={{ margin: 5 }}
          onPress={invalidateChartData}
        >
          <Icon asset={rotate} style={{}} />
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
            axisY={{ nombre: 'Consumo', unidad: '%' }}
            data={ec2CPUData}
            title="CPU"
            color={COLORS.primary600}
          />
        </View>
        <View style={itemStyle}>
          {isIn ? (
            <UniversalBlockChart
              axisX={{ nombre: 'Tiempo', unidad: 'h:m' }}
              axisY={{ nombre: 'Bytes', unidad: 'b' }}
              data={ec2NetworkInData}
              title="Red (Entrada)"
              color={COLORS.success600}
            />
          ) : (
            <UniversalBlockChart
              axisX={{ nombre: 'tiempo', unidad: 'h:m' }}
              axisY={{ nombre: 'Bytes', unidad: 'b' }}
              data={ec2NetworkOutData}
              title="Red (Salida)"
              color={COLORS.success600}
            />
          )}
        </View>
        <View style={itemStyle}>
          {isIn ? (
            <UniversalBlockChart
              axisX={{ nombre: 'Tiempo', unidad: 'h:s' }}
              axisY={{ nombre: 'Paquetes', unidad: 'u/p' }}
              data={ec2NetworkPacketsInData}
              title="Paquetes de Red (Entrada)"
              color={COLORS.gray600}
            />
          ) : (
            <UniversalBlockChart
              axisX={{ nombre: 'Tiempo', unidad: 'h:s' }}
              axisY={{ nombre: 'Paquetes', unidad: 'u/p' }}
              data={ec2NetworkPacketsOutData}
              title="Paquetes de Red (Salida)"
              color={COLORS.gray600}
            />
          )}
        </View>
        <View style={itemStyle}>
          {isIn ? (
            <UniversalBlockChart
              axisX={{ nombre: 'tiempo', unidad: 'h:m' }}
              axisY={{ nombre: 'Bytes', unidad: 'b' }}
              data={ec2WriteDiskData}
              title="Disco (Escritura)"
            />
          ) : (
            <UniversalBlockChart
              axisX={{ nombre: 'tiempo', unidad: 'h:m' }}
              axisY={{ nombre: 'Bytes', unidad: 'b' }}
              data={ec2ReadDiskData}
              title="Disco (Lectura)"
            />
          )}
        </View>
      </View>
    </>
  )
}
