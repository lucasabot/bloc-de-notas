import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { UTButton, UTLabel } from '@widergy/energy-ui';

import { QUOTES } from 'constants/routes';

import styles from './styles.module.scss';

const Home = ({ dispatch }) => {
  const goToQuotes = useCallback(() => dispatch(push(QUOTES)), [dispatch]);

  return (
    <div className={styles.container}>
      <UTLabel large semibold>
        This is the home page of Widergy - React App Boostrap
      </UTLabel>
      <UTLabel className={styles.action}>Please press button to be redirected to Quotes Page</UTLabel>
      <UTButton onPress={goToQuotes}>Go to quotes!</UTButton>
    </div>
  );
};

export default connect()(Home);
