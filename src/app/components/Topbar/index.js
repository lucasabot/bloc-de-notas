import React, { useCallback } from 'react';
import { UTLabel, UTButton } from '@widergy/energy-ui';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router';
import i18 from 'i18next';

import logo from 'app/assets/logoBlanco.png';
import { HOME } from 'constants/routes';

import styles from './styles.module.scss';

const Topbar = ({ dispatch }) => {
  const goToHome = useCallback(() => dispatch(push(HOME), [dispatch]));

  const pathName = useLocation().pathname;

  return (
    <div className={styles.container}>
      <UTLabel bold large white>
        {i18.t('Topbar:title')}
      </UTLabel>
      {![HOME, '/home'].includes(pathName) && (
        <UTButton className={styles.backButton} onPress={goToHome}>
          {i18.t('Topbar:backHomeButton')}
        </UTButton>
      )}
      <img alt="logo" src={logo} className={styles.logo} onKeyDown={goToHome} onClick={goToHome} />
    </div>
  );
};

export default connect()(Topbar);
