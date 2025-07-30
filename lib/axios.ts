// lib/axios.ts
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true, // if using cookies/session
})

export default api
