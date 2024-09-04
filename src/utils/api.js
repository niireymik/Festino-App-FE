import axios from 'axios';

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const initAuth = async () => {
  try {
    const response = await baseApi.post('/main/auth/init');
    if (!response.data.success) alert('Check your network connection');
  } catch (error) {
    console.error(error);
    alert('Check your network connection or try again later');
  }
};

export const api = {
  get: async (url, config) => {
    try {
      await initAuth();
      const response = await baseApi.post('/main/auth/token');
      if (!response.data.success) {
        alert('Check your network status');
        return Promise.reject(response);
      }
    } catch (error) {
      alert('Check your network status');
      return Promise.reject(error);
    }
    return baseApi.get(url, config);
  },
  post: async (url, data, config) => {
    try {
      await initAuth();
      const response = await baseApi.post('/main/auth/token');
      if (!response.data.success) {
        alert('Check your network status');
        return Promise.reject(response);
      }
    } catch (error) {
      alert('Check your network status');
      return Promise.reject(error);
    }
    return baseApi.post(url, data, config);
  },
  put: async (url, data, config) => {
    try {
      await initAuth();
      const response = await baseApi.post('/main/auth/token');
      if (!response.data.success) {
        alert('Check your network status');
        return Promise.reject(response);
      }
    } catch (error) {
      alert('Check your network status');
      return Promise.reject(error);
    }
    return baseApi.put(url, data, config);
  },
  delete: async (url, config) => {
    try {
      await initAuth();
      const response = await baseApi.post('/main/auth/token');
      if (!response.data.success) {
        alert('Check your network status');
        return Promise.reject(response);
      }
    } catch (error) {
      alert('Check your network status');
      return Promise.reject(error);
    }
    return baseApi.delete(url, config);
  },
};
