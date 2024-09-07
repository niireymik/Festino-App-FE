import axios from 'axios';

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const api = {
  get: async (url, config) => {
    const response = await baseApi.post('/main/auth/token');
    return baseApi.get(url, config);
  },
  post: async (url, data, config) => {
    const response = await baseApi.post('/main/auth/token');
    return baseApi.post(url, data, config);
  },
  put: async (url, data, config) => {
    const response = await baseApi.post('/main/auth/token');
    return baseApi.put(url, data, config);
  },
  delete: async (url, config) => {
    const response = await baseApi.post('/main/auth/token');
    return baseApi.delete(url, config);
  },
};
