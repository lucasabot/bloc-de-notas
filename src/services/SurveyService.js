import surveyApi from 'config/surveyApi';

export default {
  sendSurvey: data => surveyApi.post('/surveys', data)
};
