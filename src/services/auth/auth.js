import apiClient from '@/plugins/Axios';
import { setToken, removeToken } from '@/utils/auth';

export const login = async formData => {
  try {
    const response = await apiClient.post('api/User/login', formData);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    throw error;
  }
};

export const register = async formData => {
  try {
    const response = await apiClient.post('api/User/register', formData);

    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const logout = () => {
  removeToken();
};
