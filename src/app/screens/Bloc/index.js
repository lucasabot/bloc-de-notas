import React, { useState } from 'react';
import { connect } from 'react-redux';
import i18 from 'i18next';

import InlineInput from 'app/components/InlineInput';
import InlineTextArea from 'app/components/InlineTextArea';

import styles from './styles.module.scss';

const Bloc = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleTitleChange = e => {
    setTitleValue(e.target.value);
  };

  const handleTextValue = e => {
    setTextValue(e.target.value);
  };

  const countWords = () =>
    textValue
      .split(' ')
      .map(item =>
        // Si tiene un espacio tengo que splittearlo
        item.substring('\n') ? item.split('\n') : item
      )
      .flatMap(item => item) // subo los subArrays resultantes al mismo nivel que los strings
      .filter(item => !!item).length; // filtro los espacios residuales y devuelvo el largo de mi array

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
        wordsQuantity={textValue.length === 0 ? 0 : countWords()}
      />
    </div>
  );
};

export default connect()(Bloc);
