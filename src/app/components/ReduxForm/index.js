import React from 'react';
import { reduxForm } from 'redux-form';

const ReduxForm = ({ children, handleSubmit, submitting, reset, pristine, className }) => {
  console.log({ children });
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default reduxForm({ form: 'notesForm' })(ReduxForm);
