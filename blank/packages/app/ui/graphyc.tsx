import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { RechartsDevtools } from '@recharts/devtools'

export default function IndexLineChart() {
  return (
    <LineChart
      style={{
        width: '100%',
        aspectRatio: 1.618,
        maxWidth: 800,
        margin: 'auto',
      }}
      responsive
      data={data}
    >
      <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-1)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="var(--color-chart-2)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <RechartsDevtools />
    </LineChart>
  )
}
