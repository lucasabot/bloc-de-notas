import React from 'react';
import i18 from 'i18next';
import { useDispatch } from 'react-redux';
import { UTLabel } from '@widergy/energy-ui';

import ReduxForm from 'app/components/ReduxForm';
import SurveyActions from 'redux/survey/actions';

import styles from './styles.module.scss';

const Survey = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(SurveyActions.saveSurvey(values));
  };

  return (
    <div className={styles.formContainer}>
      <UTLabel bold large black className={styles.surveyTitle}>
        {i18.t('Survey:title')}
      </UTLabel>
      <ReduxForm onSubmit={handleSubmit} className={styles.form} />
    </div>
  );
};

export default Survey;
