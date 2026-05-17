import { useState } from 'react'
import { View, Text, LayoutChangeEvent, StyleSheet } from 'react-native'
import { Svg, Path, Circle, G, Line as SvgLine } from 'react-native-svg'

// --- Tipos ---
export interface AxisInfo {
  nombre: string
  unidad: string
}

export interface MetricPoint {
  timestamp: string
  value: number
}

interface Props {
  data: MetricPoint[]
  title: string
  axisX: AxisInfo
  axisY: AxisInfo
  color?: string
}

export const UniversalBlockChart = ({
  data,
  title,
  axisX,
  axisY,
  color = '#007AFF',
}: Props) => {
  const [width, setWidth] = useState(0)
  const HEIGHT = 220
  const MARGIN = { top: 20, right: 20, bottom: 40, left: 50 }

  if (!data) return <Text>Esperando métricas de AWS...</Text>

  const onLayout = (e: LayoutChangeEvent) =>
    setWidth(e.nativeEvent.layout.width)

  // --- MATEMÁTICAS PURAS (Sin D3) ---
  const drawableWidth = width - MARGIN.left - MARGIN.right
  const drawableHeight = HEIGHT - MARGIN.top - MARGIN.bottom

  // 1. Encontrar valores máximos y mínimos para escalar
  const values = data.map((d) => d.value)
  const maxVal = Math.max(...values) || 1
  const minVal = 0 // Empezamos en 0 para que la gráfica tenga contexto

  // 2. Función para convertir Valor -> Coordenada Y
  const getY = (val: number) =>
    MARGIN.top + (drawableHeight - (val / maxVal) * drawableHeight)

  // 3. Función para convertir Índice -> Coordenada X
  const getX = (index: number) =>
    MARGIN.left + index * (drawableWidth / (data.length - 1))

  // 4. Construir el comando "d" para el Path (Línea)
  // Genera un string tipo "M x1 y1 L x2 y2..."
  const linePath = data.reduce((path, point, i) => {
    const x = getX(i)
    const y = getY(point.value)
    return i === 0 ? `M ${x} ${y}` : `${path} L ${x} ${y}`
  }, '')

  // 5. Construir el Área (Cerramos el path por abajo)
  const areaPath = `${linePath} L ${getX(data.length - 1)} ${HEIGHT - MARGIN.bottom} L ${getX(0)} ${HEIGHT - MARGIN.bottom} Z`

  return (
    <>
      {data && data.length > 1 ? (
        <View onLayout={onLayout} style={styles.card}>
          <Text style={styles.title}>{title}</Text>

          {width > 0 && (
            <Svg width={width} height={HEIGHT}>
              <G>
                {/* --- GRID (Líneas de fondo) --- */}
                {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                  <SvgLine
                    key={i}
                    x1={MARGIN.left}
                    y1={getY(maxVal * p)}
                    x2={width - MARGIN.right}
                    y2={getY(maxVal * p)}
                    stroke="#E0E0E0"
                    strokeDasharray="5,5"
                  />
                ))}

                {/* --- ÁREA SOMBREADA --- */}
                <Path d={areaPath} fill={color} fillOpacity={0.1} />

                {/* --- LÍNEA DE DATOS --- */}
                <Path d={linePath} stroke={color} strokeWidth={3} fill="none" />

                {/* --- PUNTOS --- */}
                {data.map((d, i) => (
                  <Circle
                    key={i}
                    cx={getX(i)}
                    cy={getY(d.value)}
                    r={4}
                    fill={color}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </G>
            </Svg>
          )}
          {/* --- EJE Y TEXTO --- */}
          <Text style={[styles.label, { top: getY(maxVal) + 25, left: 15 }]}>
            {maxVal.toFixed(1)} {' ' + axisY.unidad}
          </Text>
          <Text style={[styles.label, { top: getY(maxVal) + 5, left: 15 }]}>
            {axisY.nombre}
          </Text>
          <Text style={[styles.label, { top: getY(0) + 25, left: 15 }]}>
            0{' ' + axisY.unidad}
          </Text>

          {/* --- EJE X (LEYENDA DE TIEMPO) --- */}

          <View style={styles.xLabels}>
            <Text style={styles.labelX}>
              {new Date(data[0].timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
            <Text style={styles.labelX}>{axisX.nombre}</Text>
            <Text style={styles.labelX}>
              {new Date(data[data.length - 1].timestamp).toLocaleTimeString(
                [],
                {
                  hour: '2-digit',
                  minute: '2-digit',
                },
              )}
            </Text>
          </View>
        </View>
      ) : (
        <View
          onLayout={onLayout}
          style={[
            styles.card,
            { justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          <Text>Sin datos sobre {title}</Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    marginBottom: 0,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 15,
    marginTop: -40,
  },
  labelX: { fontSize: 10, color: '#3f3f3f' },
  label: { position: 'absolute', fontSize: 10, color: '#101010' },
})
