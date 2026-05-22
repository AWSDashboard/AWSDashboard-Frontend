import { create } from 'zustand'
import { Platform } from 'react-native'

const TOKEN_KEY = 'mi_app_jwt_token'

//almacen universal para web y movil
const universalStorage = {
  getToken: async (): Promise<string | null> => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        return localStorage.getItem(TOKEN_KEY)
      }
      return null
    }
    //en movil solo lo almacenaremos en la memoria de la app, si se cierra debera iniciar sesion de nuevo
    return null
  },

  setToken: async (token: string): Promise<void> => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token)
      }
    }
  },

  removeToken: async (): Promise<void> => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY)
      }
    }
  },
}

interface AuthState {
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
}
interface AuthActions {
  initializeAuth: () => Promise<void>
  login: (jwtToken: string) => Promise<void>
  logout: () => Promise<void>
}
type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set, get) => ({
  token: null,
  isLoading: true,
  isAuthenticated: false,

  initializeAuth: async () => {
    try {
      const savedToken = await universalStorage.getToken()
      const currentToken = get().token // Leemos lo que hay actualmente en memoria
      if (!savedToken && currentToken) {
        set({ isLoading: false })
        return
      }

      set({
        token: savedToken,
        isAuthenticated: !!savedToken,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error inicializando la sesión:', error)
      set({ token: null, isAuthenticated: false, isLoading: false })
    }
  },

  login: async (jwtToken: string) => {
    set({ isLoading: true })
    try {
      //almacenamos el token
      await universalStorage.setToken(jwtToken)
      set({
        token: jwtToken,
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error al guardar el token:', error)
      set({ isLoading: false })
    }
  },

  logout: async () => {
    set({ isLoading: true })
    try {
      await universalStorage.removeToken()
      set({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
      set({ isLoading: false })
    }
  },
}))
