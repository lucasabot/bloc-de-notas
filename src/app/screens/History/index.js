import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';
import { any, objectOf } from 'prop-types';

import NotesActions from 'redux/notes/actions';

import NotesContainer from './components/NotesContainer';
import styles from './styles.module.scss';

const History = ({ notes }) => {
  const dispatch = useDispatch();

  const getNotesFromAPI = dispatch(NotesActions.getNotes());

  useEffect(() => {
    getNotesFromAPI();
  }, []);

  return (
    <div className={styles.container}>
      <UTLabel bold large black>
        {i18.t('History:title')}
      </UTLabel>
      <NotesContainer notes={notes} />
    </div>
  );
};

History.propTypes = {
  notes: objectOf(any)
};

const mapDispatchToProps = state => ({ notes: state.notes });

export default connect(mapDispatchToProps)(History);
