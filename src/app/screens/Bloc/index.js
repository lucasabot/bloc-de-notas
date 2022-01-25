import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18 from 'i18next';

import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';
import NotesActions from 'redux/notes/actions';
import { countWords } from 'utils/functionUtils';

import styles from './styles.module.scss';

const Bloc = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);

  const setTextStyle = textStyle => {
    if (textStyle === 'bold') setBold(!bold);
    if (textStyle === 'italic') setItalic(!italic);
  };
  const [isTitleOpen, setIsTitleOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitleChange = e => setTitleValue(e.target.value);

  const handleSaveNote = () => {
    dispatch(NotesActions.saveNote({ title: titleValue, content: textValue, italic, bold }));
    setTitleValue('');
    setItalic(false);
    setBold(false);
  };

  const handleTextValue = e => setTextValue(e.target.value);

  return (
    <div className={styles.container}>
      <InlineInput
        type="text"
        placeholder={i18.t('Bloc:titleInput')}
        inputValue={titleValue}
        onChange={handleTitleChange}
        setIsTitleOpen={setIsTitleOpen}
      />
      <InlineTextArea
        placeholder={i18.t('Bloc:textInput')}
        value={textValue}
        onChange={handleTextValue}
        clearValue={() => setTextValue('')}
        deleteLastChar={() => setTextValue(textValue.slice(0, -1))}
        wordsQuantity={textValue.length === 0 ? 0 : countWords(textValue)}
        setTextStyle={setTextStyle}
        textClassNames={{ italic, bold }}
        onSave={handleSaveNote}
        canSave={textValue?.length > 0 && titleValue?.length > 0}
        isTitleOpen={isTitleOpen}
        clearOnSave
      />
    </div>
  );
};

export default Bloc;
