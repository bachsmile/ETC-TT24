// src/utils/auth.js

import store from '@/store';
import apiClient from '@/plugins/Axios';

export const getToken = () => localStorage.getItem('token');

export const setToken = token => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => !!getToken();

export const initializeAuth = async () => {
  const token = getToken();
  if (token) {
    try {
      const response = await apiClient.get('api/User/me');
      store.commit('SET_USER', response.data);
    } catch (error) {
      console.error('Không thể lấy dữ liệu người dùng:', error);
      removeToken();
      store.commit('SET_USER', null);
    }
  } else {
    store.commit('SET_USER', null);
  }
};
