import { createTypes, completeTypes } from 'redux-recompose';
import i18 from 'i18next';

import SurveyService from 'services/SurveyService';

export const actions = createTypes(completeTypes(['SAVE_SURVEY'], ['SAVE_USERNAME']), '@@SURVEY');

const privateActionsCreators = {
  saveSurveySuccess: payload => ({ type: actions.SAVE_SURVEY_SUCCESS, payload, target: 'saveSurvey' }),
  saveSurveyFailure: () => ({ type: actions.SAVE_SURVEY_FAILURE, target: 'saveSurvey' })
};

export const actionCreators = {
  saveSurvey: payload => async dispatch => {
    dispatch({
      type: actions.SAVE_SURVEY,
      target: 'saveSurvey'
    });
    const response = await SurveyService.sendSurvey(payload);
    const { addToast } = payload;
    if (response.ok) {
      dispatch(privateActionsCreators.saveSurveySuccess(response));
      addToast(i18.t('DefaultMessages:saveSurveySuccess', { title: 'SURVEY' }));
    } else {
      dispatch(privateActionsCreators.saveSurveyFailure(response.error));
      addToast(i18.t('DefaultMessages:saveSurveyFailure', { title: 'SURVEY', error: response.error }), {
        style: 'danger'
      });
    }
  },
  saveUsername: payload => dispatch => dispatch({ type: actions.SAVE_USERNAME, payload, target: 'username' })
};

export default actionCreators;
