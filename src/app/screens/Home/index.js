import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { UTButton, UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';

import { BLOC, HISTORY } from 'constants/routes';

import styles from './styles.module.scss';

const Home = ({ dispatch }) => {
  const goToBloc = useCallback(() => dispatch(push(BLOC), [dispatch]));
  const goToHistory = useCallback(() => dispatch(push(HISTORY), [dispatch]));

  return (
    <div className={styles.container}>
      <UTLabel large semibold>
        {i18.t('Home:title')}
      </UTLabel>
      <UTLabel className={styles.action}>{i18.t('Home:subtitle')}</UTLabel>
      <div className={styles.buttonContainer}>
        <UTButton onPress={goToBloc}>{i18.t('Home:blocButton')}</UTButton>
        <UTButton onPress={goToHistory}>{i18.t('Home:historyButton')}</UTButton>
      </div>
    </div>
  );
};

export default connect()(Home);
