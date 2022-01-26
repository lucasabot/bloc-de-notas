import React, { useState } from 'react';

import InlineInput from 'app/components/InlineInput';
import ReduxForm from 'app/components/ReduxForm';
import InputForm from 'app/components/InputForm';

import styles from './styles.module.scss';

const Quiz = () => {
  const [inputOpen, setInputOpen] = useState(false);

  const handleSubmit = e => {
    console.log({ e });
  };

  console.log({ styles });

  return (
    <div className={styles.formContainer}>
      <ReduxForm onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <InputForm
            component="input"
            name="nombre"
            placeholder="Ingrese su Nombre"
            type="text"
            setIsTitleOpen={() => setInputOpen}
            className={styles.formInput}
          />
          <InputForm
            component="input"
            name="apellido"
            placeholder="Ingrese su Apellido"
            type="text"
            setIsTitleOpen={() => setInputOpen}
            className={styles.formInput}
          />
        </div>
        <div className={styles.row}>
          <InputForm
            rows="10"
            cols="30"
            component="textarea"
            name="content"
            placeholder="Ingrese una devolucion"
            className={styles.formTextArea}
          />
        </div>
      </ReduxForm>
    </div>
  );
};

export default Quiz;
