import axios from 'axios';

const API_BASE_URL = 'https://carma-backend-api.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dashboardService = {
  getAdminData: () => api.get('/admin'),
  getNotifications: () => api.get('/api/admin/notifications'),
  searchOrders: (query) => api.get('/searchOrders', { params: { query } }),
};

export const orderService = {
  getOrders: () => api.get('/api/orders'),
  createOrder: (orderData) => api.post('/api/orders', orderData),
  getOrderById: (id) => api.get(`/api/orders/${id}`),
  updateOrderStatus: (id, data) => api.put(`/api/orders/${id}`, data),
  deleteOrder: (id) => api.delete(`/api/orders/${id}`),
};

export const authService = {
  login: (credentials) => api.post('/api/Auth/login', credentials),
};

export default api;
