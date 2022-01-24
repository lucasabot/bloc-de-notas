import React, { useCallback, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import UTLabel from '@widergy/energy-ui/dist/components/UTLabel';
import i18 from 'i18next';

import NotesActions from 'redux/notes/actions';

import NotesContainer from './components/NotesContainer';
import styles from './styles.module.scss';

const History = () => {
  const dispatch = useDispatch();

  const getNotesFromAPI = useCallback(() => dispatch(NotesActions.getNotes()), [dispatch]);

  useEffect(() => {
    getNotesFromAPI();
  }, [getNotesFromAPI]);

  return (
    <div className={styles.container}>
      <UTLabel bold large black>
        {i18.t('History:title')}
      </UTLabel>
      <NotesContainer notes={useSelector(state => state.notes)} />
    </div>
  );
};

export default connect()(History);
