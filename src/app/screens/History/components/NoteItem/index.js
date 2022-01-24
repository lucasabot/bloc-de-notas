import React, { useState } from 'react';
import { string, shape, number } from 'prop-types';
import { useDispatch } from 'react-redux';
import i18 from 'i18next';

import NotepadButton from 'app/components/NotepadButton';
import { countWords } from 'utils/functionUtils';
import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';
import useToastContext from 'utils/hooks/useToastContext';
import NotesActions from 'redux/notes/actions';

import styles from './styles.module.scss';

const NoteItem = ({ note }) => {
  const [titleValue, setTitleValue] = useState(note.title);
  const [textValue, setTextValue] = useState(note.content);
  const [italic, setItalic] = useState(note.italic);
  const [bold, setBold] = useState(note.bold);

  const addToast = useToastContext();

  const dispatch = useDispatch();

  const handleTitleChange = e => setTitleValue(e.target.value);
  const handleTextChange = e => setTextValue(e.target.value);

  const setTextStyle = textStyle => {
    if (textStyle === 'bold') setBold(!bold);
    if (textStyle === 'italic') setItalic(!italic);
  };

  const handleSelfDelete = () => {
    dispatch(NotesActions.deleteNote(note));
    addToast(i18.t('DefaultMessages:deleteNoteSuccess'), { style: 'danger' });
  };

  const handleModification = () => {
    if (
      titleValue !== note.title ||
      textValue !== note.text ||
      bold !== note.bold ||
      italic !== note.italic
    ) {
      dispatch(NotesActions.modifyNote({ content: textValue, title: titleValue, bold, italic, id: note.id }));
    }
  };

  return (
    <div className={styles.noteItem_container}>
      <NotepadButton buttonText="X" onClick={handleSelfDelete} className={styles.noteItem_deleteButton} />
      <InlineInput
        placeholder={titleValue || i18.t('Bloc:titleInput')}
        inputValue={titleValue}
        type="text"
        className={styles.noteItem_title}
        onChange={handleTitleChange}
      />

      <InlineTextArea
        placeholder={textValue || i18.t('Bloc:textInput')}
        value={textValue}
        onChange={handleTextChange}
        clearValue={() => setTextValue('')}
        deleteLastChar={() => setTextValue(textValue.slice(0, -1))}
        wordsQuantity={textValue.length === 0 ? 0 : countWords(textValue)}
        setTextStyle={setTextStyle}
        textClassNames={{ italic, bold }}
        onSave={handleModification}
        classNames={{
          span: styles.noteItem_text_span,
          textArea: styles.noteItem_text_textArea,
          buttonContainer: styles.noteItem_buttonContainer,
          text: styles.noteItem_text
        }}
      />
    </div>
  );
};

NoteItem.propTypes = {
  note: shape({
    title: string,
    text: string,
    className: string,
    id: number
  })
};

export default NoteItem;
