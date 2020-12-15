import axios from 'axios';
const AUTH_TOKEN = '';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
  const { data } = response;
  return data;
}, (error) => {
  return Promise.reject(error);
})

export default axios;