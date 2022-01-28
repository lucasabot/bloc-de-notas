import { create } from 'apisauce';

const api = create({
  baseURL: 'https://notes-api-for-practicing.herokuapp.com/api',
  timeout: 30000
});

export default api;
