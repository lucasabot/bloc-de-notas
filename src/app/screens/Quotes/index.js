import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { UTCard, UTLabel } from '@widergy/energy-ui';
import { bool } from 'prop-types';

import UTLoading from 'app/components/UTLoading';
import CharactersActions from 'redux/characters/actions';
import { quoteType } from 'types/quotesTypes';

import QuotesForm from './components/QuotesForm';
import styles from './styles.module.scss';

class QuotesContainer extends PureComponent {
  handleSubmit = values => this.props.dispatch(CharactersActions.getQuotes(values.count));

  render() {
    const { quotes, loading } = this.props;
    return (
      <div className={styles.container}>
        <UTCard>
          <QuotesForm onSubmit={this.handleSubmit} />
        </UTCard>
        <div className={styles.characters}>
          <UTLoading loading={loading}>
            {quotes.map(quote => (
              <div className={styles.characterContainer}>
                <img alt="character" src={quote.image} className={styles.character} />
                <UTLabel large semibold>
                  {quote.character}
                </UTLabel>
                <UTLabel>{quote.quote}</UTLabel>
              </div>
            ))}
          </UTLoading>
        </div>
      </div>
    );
  }
}

QuotesContainer.propTypes = {
  loading: bool,
  quotes: quoteType
};

const mapStateToProps = store => ({
  quotes: store.characters.quotes,
  loading: store.characters.quotesLoading
});

export default connect(mapStateToProps)(QuotesContainer);
