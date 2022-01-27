import React, { useState } from 'react';
import i18 from 'i18next';
import { UTLabel, UTButton } from '@widergy/energy-ui';

import InlineInput from 'app/components/InlineInput';
import ReduxForm from 'app/components/ReduxForm';

import styles from './styles.module.scss';

const Quiz = () => {
  const handleSubmit = e => {
    console.log({ e });
  };

  console.log({ styles });

  return (
    <div className={styles.formContainer}>
      <UTLabel bold large black className={styles.quizTitle}>
        {i18.t('Quiz:title')}
      </UTLabel>
      <ReduxForm onSubmit={handleSubmit} className={styles.form} />
    </div>
  );
};

export default Quiz;
