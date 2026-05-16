// packages/app/store/useCounterStore.ts
import { create } from 'zustand'

interface PendingState {
  pending: boolean
  setPending: (p: boolean) => void
}

export const usePendingStore = create<PendingState>((set) => ({
  pending: false,
  setPending: (p: boolean) => set({ pending: p }),
}))
