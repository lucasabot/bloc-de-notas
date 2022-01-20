import React, { useCallback } from 'react';
import { UTButton } from '@widergy/energy-ui';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router';
import i18 from 'i18next';

import logo from 'app/assets/logoBlanco.png';
import { HOME, HISTORY, BLOC } from 'constants/routes';

import styles from './styles.module.scss';

const Topbar = ({ dispatch }) => {
  const goToHome = useCallback(() => dispatch(push(HOME), [dispatch]));
  const goToHistory = useCallback(() => dispatch(push(HISTORY), [dispatch]));
  const goToAbloc = useCallback(() => dispatch(push(BLOC), [dispatch]));

  const pathName = useLocation().pathname;

  return (
    <div className={styles.container}>
      <UTButton className={styles.topBarTitle} bold large white onPress={goToHome}>
        {i18.t('Topbar:title')}
      </UTButton>
      <UTButton
        className={styles.topBarButton}
        onPress={goToHome}
        disabled={[HOME, '/home'].includes(pathName)}
      >
        {i18.t('Topbar:goHome')}
      </UTButton>

      <UTButton className={styles.topBarButton} onPress={goToAbloc} disabled={[BLOC].includes(pathName)}>
        {i18.t('Topbar:goBloc')}
      </UTButton>

      <UTButton className={styles.topBarButton} onPress={goToHistory} disabled={[HISTORY].includes(pathName)}>
        {i18.t('Topbar:goHistory')}
      </UTButton>
      <img alt="logo" src={logo} className={styles.logo} onKeyDown={goToHome} onClick={goToHome} />
    </div>
  );
};

export default connect()(Topbar);
