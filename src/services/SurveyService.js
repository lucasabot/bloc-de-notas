import surveyApi from 'config/surveyApi';

export default {
  sendSurvey: () => surveyApi.post('/notes')
};
