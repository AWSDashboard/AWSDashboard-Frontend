import { Provider } from 'app/provider'

export const metadata = {
  title: 'AWS Dashboard',
  description: 'amazon web services Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
