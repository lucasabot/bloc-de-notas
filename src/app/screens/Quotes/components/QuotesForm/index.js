import React, { PureComponent } from 'react';
import { UTLabel, UTButton } from '@widergy/energy-ui';
import { reduxForm } from 'redux-form';

import UTForm from 'app/components/UTForm';

import { charactersCount } from './constants';
import styles from './styles.module.scss';

const fields = [charactersCount];

class Quotes extends PureComponent {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={styles.form}>
        <UTLabel large semibold className={styles.formTitle}>
          Cuántos personajes desea recuperar?
        </UTLabel>
        <UTForm fields={fields} />
        <UTButton text type="submit">
          Consultar
        </UTButton>
      </form>
    );
  }
}

export default reduxForm({ form: 'CharactersForm' })(Quotes);
