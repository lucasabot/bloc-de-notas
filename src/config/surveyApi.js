import { create } from 'apisauce';

const surveyApi = create({
  baseURL: 'https://notes-api-for-practicing.herokuapp.com/api',
  timeout: 30000
});

export default surveyApi;
