import React from 'react';
import { connect, useSelector } from 'react-redux';
import UTLabel from '@widergy/energy-ui/dist/components/UTLabel';
import i18 from 'i18next';

import { getNotesSelector } from 'redux/notes/selectors';

import NotesContainer from './components/NotesContainer';
import styles from './styles.module.scss';

const History = () => {
  const notes = useSelector(getNotesSelector);

  return (
    <div className={styles.container}>
      <UTLabel bold large black>
        {i18.t('History:title')}
      </UTLabel>
      <NotesContainer notes={notes} />
    </div>
  );
};

export default connect()(History);
