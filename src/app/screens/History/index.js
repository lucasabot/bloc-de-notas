import React from 'react';
import { connect, useSelector } from 'react-redux';
import { UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';

import NotesContainer from './components/NotesContainer';
import styles from './styles.module.scss';

const History = () => (
  <div className={styles.container}>
    <UTLabel bold large black>
      {i18.t('History:title')}
    </UTLabel>
    <NotesContainer notes={useSelector(state => state.notes)} />
  </div>
);

export default connect()(History);
