import React from 'react';
import i18 from 'i18next';
import { connect } from 'react-redux';
import { UTLabel } from '@widergy/energy-ui';
import { bool } from 'prop-types';

import ReduxForm from 'app/components/ReduxForm';
import SurveyActions from 'redux/survey/actions';
import useToastContext from 'utils/hooks/useToastContext';
import UTLoading from 'app/components/UTLoading';

import styles from './styles.module.scss';

const Survey = ({ dispatch, loading }) => {
  const addToast = useToastContext();

  const handleSubmit = values => {
    dispatch(SurveyActions.saveSurvey({ ...values, addToast }));
  };

  return (
    <div className={styles.formContainer}>
      <UTLabel bold large black className={styles.surveyTitle}>
        {i18.t('Survey:title')}
      </UTLabel>
      <UTLoading loading={loading}>
        <ReduxForm onSubmit={handleSubmit} className={styles.form} />
      </UTLoading>
    </div>
  );
};

Survey.propTypes = {
  loading: bool
};

const mapStateToProps = state => ({
  loading: state.survey?.saveSurveyLoading
});

export default connect(mapStateToProps)(Survey);
