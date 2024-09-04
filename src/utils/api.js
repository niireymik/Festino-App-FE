import axios from 'axios';

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const api = {
  get: async (url, config) => {
    try {
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
