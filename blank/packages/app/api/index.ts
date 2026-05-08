// packages/app/api/index.ts
import axios from 'axios'
import { Platform } from 'react-native'

const getBaseUrl = () => {
  if (Platform.OS === 'web') {
    return 'http://localhost:8080/api/v1'
  }
  return 'http://192.168.1.39:8080/api/v1'
}

export const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
