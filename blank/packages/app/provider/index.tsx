// packages/app/provider/index.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationProvider } from './navigation' // Tu navegación actual

// 1. Creamos el cliente
const queryClient = new QueryClient()

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    // 2. Envolvemos todo
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <>{children}</>
      </NavigationProvider>
    </QueryClientProvider>
  )
}
