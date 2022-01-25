import React, { useState } from 'react';
import { string, shape, number } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import i18 from 'i18next';

import { countWords } from 'utils/functionUtils';
import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';
import useToastContext from 'utils/hooks/useToastContext';
import NotepadButton from 'app/components/NotepadButton';
import NotesActions from 'redux/notes/actions';

import styles from './styles.module.scss';

const NoteItem = ({ note }) => {
  const [titleValue, setTitleValue] = useState(note.title);
  const [textValue, setTextValue] = useState(note.content);
  const [italic, setItalic] = useState(note.italic);
  const [bold, setBold] = useState(note.bold);
  const [isTitleOpen, setIsTitleOpen] = useState(false);

  const addToast = useToastContext();

  const dispatch = useDispatch();

  const deleteNoteLoading = useSelector(state => state.notes.deleteNoteLoading);

  const handleTitleChange = e => setTitleValue(e.target.value);
  const handleTextChange = e => setTextValue(e.target.value);

  const setTextStyle = textStyle => {
    if (textStyle === 'bold') setBold(!bold);
    if (textStyle === 'italic') setItalic(!italic);
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

  const handleSelfDelete = () => {
    dispatch(NotesActions.deleteNote(note));
    addToast(i18.t('DefaultMessages:deleteNoteSuccess', { title: note.title }), { style: 'danger' });
  };

  return (
    <div className={styles.noteItemContainer}>
      <NotepadButton
        buttonText={i18.t('Bloc:deleteNote')}
        onClick={handleSelfDelete}
        className={styles.noteItemDeleteButton}
        disabled={deleteNoteLoading}
      />
      <InlineInput
        placeholder={titleValue || i18.t('Bloc:titleInput')}
        inputValue={titleValue}
        type="text"
        className={styles.noteItemTitle}
        onChange={handleTitleChange}
        setIsTitleOpen={setIsTitleOpen}
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
        canSave={textValue?.length > 0 && titleValue?.length > 0}
        isTitleOpen={isTitleOpen}
        classNames={{
          span: styles.noteItemTextSpan,
          textArea: styles.noteItemTextArea,
          buttonContainer: styles.noteItemButtonContainer,
          text: styles.noteItemText
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
