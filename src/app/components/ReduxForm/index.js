import React, { useEffect } from 'react';
import { reduxForm, getFormValues, Field } from 'redux-form';
import i18 from 'i18next';
import { UTButton } from '@widergy/energy-ui';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bool, func, string, shape } from 'prop-types';

import SurveyActions from 'redux/survey/actions';

import SurveyField from './components/SurveyField';
import { validateSubmit } from './utils';
import { inputsArray } from './constants';
import styles from './styles.module.scss';

const ReduxForm = ({
  handleSubmit,
  dispatch,
  change,
  savedUserName,
  currentValues,
  submitting,
  pristine,
  className
}) => {
  const history = useHistory();

  const handleCancel = values => {
    dispatch(SurveyActions.saveUsername({ name: values?.name, lastName: values?.lastName }));
    history.goBack();
  };

  useEffect(() => {
    if (savedUserName?.name) change('name', savedUserName?.name);
    if (savedUserName?.lastName) change('lastName', savedUserName?.lastName);
  }, [JSON.stringify(savedUserName)]);

  return (
    <form className={className} onSubmit={handleSubmit}>
      {inputsArray.map(input => (
        <div key={input.name} className={styles.row}>
          <Field
            name={input.name}
            placeholder={input.placeholder}
            component={SurveyField}
            type={input.type}
            className={`${styles.formInput} ${input.type === 'textarea' && styles.formTextArea}`}
            disabled={input.name !== 'content' && (submitting || pristine)}
            rows={input.rows}
            cols={input.cols}
          />
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <UTButton className={styles.formButtonCancel} text onPress={() => handleCancel(currentValues)}>
          {i18.t('Survey:cancelButton')}
        </UTButton>
        <UTButton disabled={pristine} type="submit" className={styles.formButtonSubmit}>
          {i18.t('Survey:saveButton')}
        </UTButton>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  savedUserName: state.survey.username,
  currentValues: getFormValues('surveyForm')(state)
});

ReduxForm.propTypes = {
  handleSubmit: func,
  change: func,
  savedUserName: shape({ name: string, lastName: string }),
  currentValues: shape({ name: string, lastName: string, content: string }),
  submitting: bool,
  pristine: bool,
  className: string
};

export default reduxForm({
  form: 'surveyForm',
  initialValues: {
    name: '',
    lastName: '',
    phone: '',
    content: ''
  },
  validate: validateSubmit
})(connect(mapStateToProps)(ReduxForm));
