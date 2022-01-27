import React from 'react';
import { UTLabel } from '@widergy/energy-ui';
import i18 from 'i18next';
import { number, string, shape, arrayOf, bool } from 'prop-types';

import NoteItem from '../NoteItem';

import styles from './style.module.scss';

const NotesContainer = ({ notes }) =>
  notes.notesLoading ? (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} />
      <p>Cargando</p>
    </div>
  ) : (
    <div className={styles.notesContainer}>
      {notes.notes?.length > 0 ? (
        notes.notes?.map(note => <NoteItem key={note.id} note={note} />)
      ) : (
        <UTLabel className={styles.emptyMessageContainer} medium gray>
          {i18.t('History:empty')}
          {notes.notesError && i18.t(notes.notesError)}
        </UTLabel>
      )}
    </div>
  );

NotesContainer.propTypes = {
  notes: shape({
    notes: arrayOf(shape({ title: string, content: string, italic: bool, bold: bool, id: number })),
    notesLoading: bool,
    notesError: bool
  })
};

export default NotesContainer;
