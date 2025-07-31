import axios from 'axios'

// Create the base Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

// Central place to read user and tokens
const getUser = () => {
  const userString = localStorage.getItem('user')
  return userString ? JSON.parse(userString) : null
}

// Add request interceptor to attach access token if needed
api.interceptors.request.use(
  (config) => {
    const user = getUser()
    const accessToken = user?.access_token

    if (config.headers?.requiresAuth && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Add response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const user = getUser()
    const refreshToken = user?.refresh_token

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`, {
          refresh_token: refreshToken,
        })

        const newAccessToken = res.data.access_token

        // Update the stored user object with new access token
        const updatedUser = { ...user, access_token: newAccessToken }
        localStorage.setItem('user', JSON.stringify(updatedUser))

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('user')
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default api
