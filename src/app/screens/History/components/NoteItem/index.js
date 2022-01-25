import React, { useState } from 'react';
import { string, shape, number } from 'prop-types';
import { useDispatch } from 'react-redux';
import i18 from 'i18next';

import useToastContext from 'hooks/useToastContext';
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
  const [isTitleOpen, setIsTitleOpen] = useState(false);

  const addToast = useToastContext();

  const dispatch = useDispatch();

  const handleTitleChange = e => setTitleValue(e.target.value);
  const handleTextChange = e => setTextValue(e.target.value);

  const setTextStyle = textStyle => setTextClassNames(handleTextStyle(textStyle, textClassNames));

  const handleSelfDelete = () => {
    dispatch(NotesActions.deleteNote(note));
    addToast(i18.t('DefaultMessages:deleteNoteSuccess', { title: note.title }), { style: 'danger' });
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
    <div className={styles.noteItemContainer}>
      <NotepadButton
        buttonText={i18.t('Bloc:deleteNote')}
        onClick={handleSelfDelete}
        className={styles.noteItemDeleteButton}
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
        textClassNames={textClassNames}
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
