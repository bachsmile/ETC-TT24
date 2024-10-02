import apiClient from '@/plugins/Axios';

export const login = async formData => {
  try {
    const response = await apiClient.post('/User/login', formData);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
