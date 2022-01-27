import React from 'react';
import { reduxForm, getFormValues } from 'redux-form';
import i18 from 'i18next';
import { UTButton } from '@widergy/energy-ui';
import { useHistory } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import SurveyActions from 'redux/survey/actions';
import InputForm from 'app/components/InputForm';

import { required, phoneNumber, justCharacters } from './utils';
import styles from './styles.module.scss';

const ReduxForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  /* const {
    handleSubmit,
    change,
    initialValues,
    initialize,
    savedUserName,
    formValues,
    submitting,
    reset,
    pristine,
    className
  } = props; */

  // console.log(props);

  const handleCancel = currentValues => {
    console.log({ currentValues });

    // dispatch(SurveyActions.saveUsername({ name: currentValues?.name, lastName: currentValues?.lastName }));
    history.goBack();
  };

  const handleSubmit = () => alert('Submit');

  return (
    <form /* className={className} */ onSubmit={handleSubmit}>
      <div className={styles.row}>
        <InputForm
          name="name"
          placeholder="Ingrese su Nombre"
          type="text"
          // validate={[required, justCharacters]}
          className={styles.formInput}
        />
      </div>
      <div className={styles.row}>
        <InputForm
          name="lastName"
          placeholder="Ingrese su Apellido"
          type="text"
          validate={[required, justCharacters]}
          className={styles.formInput}
        />
      </div>
      <div className={styles.row}>
        <InputForm
          name="phone"
          placeholder="Ingrese su Telefono"
          type="number"
          validate={[required, phoneNumber]}
          className={styles.formInput}
        />
      </div>
      <div className={styles.row}>
        <InputForm
          rows="10"
          cols="30"
          component="textarea"
          name="content"
          validate={[required]}
          placeholder="Ingrese una devolucion"
          className={styles.formTextArea}
        />
      </div>
      <div className={styles.buttonContainer}>
        <UTButton className={styles.formButtonCancel} text onPress={() => handleCancel(/* formValues */)}>
          CANCELAR
        </UTButton>
        <UTButton
          /* disabled={invalid && submitFailed} */
          type="submit"
          className={styles.formButtonSubmit}
        >
          GUARDAR
        </UTButton>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  savedUserName: state.survey.userName,
  formValues: getFormValues('surveyForm')(state)
});

export default reduxForm({
  form: 'surveyForm'
})(ReduxForm);
