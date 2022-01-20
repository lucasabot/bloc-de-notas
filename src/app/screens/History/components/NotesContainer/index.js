import React from 'react';
import UTLabel from '@widergy/energy-ui/dist/components/UTLabel';
import i18 from 'i18next';
import { number, string, shape, arrayOf } from 'prop-types';

import NoteItem from '../NoteItem';

import { testNotes } from './utils';
import styles from './style.module.scss';

const NotesContainer = ({ notes = testNotes }) => (
  <div className={styles.notesContainer}>
    {notes?.length > 0 ? (
      notes?.map(note => <NoteItem key={note.id} note={note} />)
    ) : (
      <UTLabel className={styles.notesContainer_emptyMsg} medium gray>
        {i18.t('History:notesContainer:empty')}
      </UTLabel>
    )}
  </div>
);
NotesContainer.propTypes = {
  notes: arrayOf(shape({ title: string, text: string, className: string, id: number }))
};

export default NotesContainer;
