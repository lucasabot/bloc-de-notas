import React, { useCallback } from 'react';
import { UTLabel, UTButton } from '@widergy/energy-ui';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router';

import logo from 'app/assets/logoBlanco.png';
import { HOME } from 'constants/routes';

import styles from './styles.module.scss';

const Topbar = ({ dispatch }) => {
  const goToHome = useCallback(() => dispatch(push(HOME), [dispatch]));

  const pathName = useLocation().pathname;

  return (
    <div className={styles.container}>
      <UTLabel bold large white>
        Abloc de Notas
      </UTLabel>
      {pathName !== '/' && pathName !== '/home' && (
        <UTButton className={styles.backButton} onPress={goToHome}>
          ↩ Home
        </UTButton>
      )}
      <img alt="logo" src={logo} className={styles.logo} onKeyDown={goToHome} onClick={goToHome} />
    </div>
  );
};

export default connect()(Topbar);
