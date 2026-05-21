// packages/app/api/index.ts
import { useAuthStore } from 'app/store/useAuth'
import axios from 'axios'
import { Platform } from 'react-native'

const getBaseUrl = () => {
  if (Platform.OS === 'web') {
    return 'http://localhost:8080/api/v1'
  }
  return 'http://192.168.1.36:8080/api/v1'
}

export const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
api.interceptors.request.use(
  (config) => {
    // Leemos el token actual directamente del estado de Zustand
    const token = useAuthStore.getState().token

    // Si hay un token, lo inyectamos en las cabeceras
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
