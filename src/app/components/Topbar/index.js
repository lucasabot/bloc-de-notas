import React, { useCallback } from 'react';
import { UTLabel, UTButton } from '@widergy/energy-ui';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bool } from 'prop-types';
import { useLocation } from 'react-router';
// import {} from '@widergy/energy-ui';

import logo from 'app/assets/logoBlanco.png';
import { HOME } from 'constants/routes';
import { loadingSelector } from 'redux/notes/selectors';

import { arrayButtons } from './utils';
import styles from './styles.module.scss';

const Topbar = ({ dispatch, loading }) => {
  const pathName = useLocation().pathname;

  const goTo = useCallback(route => dispatch(push(route)), [dispatch, push]);

  const buttonsArray = arrayButtons(goTo, pathName, loading);

  return (
    <div className={styles.container}>
      {buttonsArray.map(button => (
        <UTButton {...button}>{button.label}</UTButton>
      ))}
      {loading && (
        <UTLabel bold medium className={styles.loading}>
          Cargando...
        </UTLabel>
      )}
      <img
        alt="logo"
        src={logo}
        className={styles.logo}
        onKeyDown={() => goTo(HOME)}
        onClick={() => goTo(HOME)}
        disabled={loading}
      />
    </div>
  );
};

const mapDispatchToProps = state => ({
  loading: loadingSelector(state)
});

Topbar.propTypes = {
  loading: bool
};

export default connect(mapDispatchToProps)(Topbar);
