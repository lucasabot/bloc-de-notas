import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { UTButton, UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';

import { BLOC } from 'constants/routes';

import styles from './styles.module.scss';

const Home = ({ dispatch }) => {
  const goToBloc = useCallback(() => dispatch(push(BLOC), [dispatch]));

  return (
    <div className={styles.container}>
      <UTLabel large semibold>
        {i18.t('Home:title')}
      </UTLabel>
      <UTLabel className={styles.action}>{i18.t('Home:subtitle')}</UTLabel>
      <UTButton onPress={goToBloc}>{i18.t('Home:blocButton')}</UTButton>
    </div>
  );
};

export default connect()(Home);
