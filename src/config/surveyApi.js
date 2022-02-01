import { create } from 'apisauce';

const surveyApi = create({
  baseURL: 'https://private-05325-widergytraining.apiary-mock.com',
  timeout: 30000
});

export default surveyApi;
