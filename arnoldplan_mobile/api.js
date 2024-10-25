import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu-backend.com',
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (postData) => {
  const response = await api.post('/posts', postData);
  return response.data;
};

// ... outros métodos HTTP

export default api;