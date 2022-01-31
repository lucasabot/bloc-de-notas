import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';
import { any, objectOf, bool } from 'prop-types';

import NotesActions from 'redux/notes/actions';

import NotesContainer from './components/NotesContainer';
import styles from './styles.module.scss';

const History = ({ dispatch, notes, modifyDone }) => {
  const getNotesFromAPI = () => dispatch(NotesActions.getNotes());

  useEffect(() => {
    if (modifyDone) getNotesFromAPI();
  }, [modifyDone]);

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
  notes: objectOf(any),
  modifyDone: bool
};

const mapDispatchToProps = state => ({
  notes: state.notes,
  modifyDone: !state.notes.modifyNoteLoading
});

export default connect(mapDispatchToProps)(History);
