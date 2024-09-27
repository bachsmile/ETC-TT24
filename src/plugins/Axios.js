import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Thêm token vào header
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers['Authorization'] = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    const res = {
      data: response.data,
    }
    console.log('response', res)
    return res
  },
  (error) => {
    if (error.response.status === 401) {
      // Xử lý lỗi xác thực
      router.push('/login')
    }

    return Promise.reject(error)
  },
)
export default apiClient
