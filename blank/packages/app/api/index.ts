// packages/app/api/index.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://www.google.es', // URL del Back
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})