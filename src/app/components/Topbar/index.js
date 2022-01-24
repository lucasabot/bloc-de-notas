import React, { useCallback } from 'react';
import { UTButton } from '@widergy/energy-ui';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router';

import logo from 'app/assets/logoBlanco.png';
import { HOME } from 'constants/routes';

import { arrayButtons } from './utils';
import styles from './styles.module.scss';

const Topbar = () => {
  const dispatch = useDispatch();

  const pathName = useLocation().pathname;

  const goTo = useCallback(route => dispatch(push(route)), [dispatch, push]);

  const buttonsArray = arrayButtons(goTo, pathName);

  return (
    <div className={styles.container}>
      {buttonsArray.map(button => (
        <UTButton {...button}>{button.label}</UTButton>
      ))}

      <img
        alt="logo"
        src={logo}
        className={styles.logo}
        onKeyDown={() => goTo(HOME)}
        onClick={() => goTo(HOME)}
      />
    </div>
  );
};

export default Topbar;
