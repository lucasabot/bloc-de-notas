import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { UTCard } from '@widergy/energy-ui';

import CharactersActions from 'redux/characters/actions';

import QuotesForm from './components/QuotesForm';
import styles from './styles.module.scss';


class QuotesContainer extends PureComponent {
  handleSubmit = values => this.props.dispatch(CharactersActions.getQuotes(values.count));

  render() {
    return (
      <div className={styles.container}>
        <UTCard>
          <QuotesForm onSubmit={this.handleSubmit} />
        </UTCard>
      </div>
    );
  }
}

export default connect()(reduxForm({ form: 'CHARACTERS_FORM' })(QuotesContainer));
