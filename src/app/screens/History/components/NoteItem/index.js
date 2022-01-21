import React, { useState } from 'react';
import { string, shape, number } from 'prop-types';
import { useDispatch } from 'react-redux';
import i18 from 'i18next';

import useToastContext from 'utils/hooks/useToastContext';
import { handleTextStyle, countWords } from 'utils/functionUtils';
import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';
import NotepadButton from 'app/components/NotepadButton';
import NotesActions from 'redux/notes/actions';

import styles from './styles.module.scss';

const NoteItem = ({ note }) => {
  const [titleValue, setTitleValue] = useState(note.title);
  const [textValue, setTextValue] = useState(note.text);
  const [textClassNames, setTextClassNames] = useState([]);

  const addToast = useToastContext();

  const dispatch = useDispatch();

  const handleTitleChange = e => setTitleValue(e.target.value);
  const handleTextChange = e => setTextValue(e.target.value);

  const setTextStyle = textStyle => {
    setTextClassNames(handleTextStyle(textStyle, textClassNames));
  };

  const handleSelfDelete = () => {
    dispatch(NotesActions.deleteNote(note));
    addToast(i18.t('DefaultMessages:deleteNoteSuccess'), { style: 'danger' });
  };

  const handleModification = () => {
    if (titleValue !== note.title || textValue !== note.text || textClassNames !== note.style) {
      dispatch(
        NotesActions.modifyNote({
          title: titleValue,
          text: textValue,
          style: textClassNames,
          id: note.id
        })
      );
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
        textClassNames={textClassNames}
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
