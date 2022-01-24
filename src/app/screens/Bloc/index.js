import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18 from 'i18next';

import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';
import NotesActions from 'redux/notes/actions';
import { handleTextStyle, countWords } from 'utils/functionUtils';

import styles from './styles.module.scss';

const Bloc = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [textClassNames, setTextClassNames] = useState([]);

  const dispatch = useDispatch();

  const setTextStyle = textStyle => {
    setTextClassNames(handleTextStyle(textStyle, textClassNames));
  };

  const handleTitleChange = e => {
    setTitleValue(e.target.value);
  };

  const handleTextValue = e => {
    setTextValue(e.target.value);
  };

  const handleSaveNote = () => {
    dispatch(NotesActions.saveNote({ title: titleValue, text: textValue, style: textClassNames }));
    setTitleValue('');
    setTextClassNames([]);
  };

  return (
    <div className={styles.container}>
      <InlineInput
        type="text"
        placeholder={i18.t('Bloc:titleInput')}
        inputValue={titleValue}
        onChange={handleTitleChange}
      />
      <InlineTextArea
        placeholder={i18.t('Bloc:textInput')}
        value={textValue}
        onChange={handleTextValue}
        clearValue={() => setTextValue('')}
        deleteLastChar={() => setTextValue(textValue.slice(0, -1))}
        wordsQuantity={textValue.length === 0 ? 0 : countWords(textValue)}
        setTextStyle={setTextStyle}
        textClassNames={textClassNames}
        onSave={handleSaveNote}
        canSave={textValue?.length > 0 && titleValue?.length > 0}
        clearOnSave
      />
    </div>
  );
};

export default Bloc;
