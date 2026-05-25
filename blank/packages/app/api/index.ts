// packages/app/api/index.ts
import { useAuthStore } from 'app/store/useAuth'
import axios from 'axios'
import { Platform } from 'react-native'

//como tenemos multiplataforma. Para el desarrollo en native se debe conectar
//en lugar de a localhost a la ip del ordenador que aloja el servidor
const getBaseUrl = () => {
  if (Platform.OS === 'web') {
    return 'http://localhost:8080/api/v1'
  }
  return 'http://192.168.1.38:8080/api/v1'
}

export const api = axios.create({
  // baseURL: getBaseUrl(),
  baseURL: 'https://awsdashboard-backend.duckdns.org/api/v1',
  timeout: 10000, //tiempo límite de la llamada
  //headers de las llamadas
  headers: {
    'Content-Type': 'application/json',
  },
})
//interceptor que inyecta el TokenJWT en el header con la palabra clave Bearer
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
