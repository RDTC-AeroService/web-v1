import apiClient from '@/lib/axios';

export const authService = {
  login: async (email: string, password: string) => {
    const { data } = await apiClient.post('/auth/login', { email, password });
    return data; // { access_token: '...' }
  },

  register: async (email: string, password: string) => {
    const { data } = await apiClient.post('/auth/register', { email, password });
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};