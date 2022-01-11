import React, { useState } from 'react';
import { connect } from 'react-redux';

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

  return (
    <section className={styles.container}>
      <InlineInput
        type="text"
        placeholder="Ingrese un titulo"
        inputValue={titleValue}
        onChange={handleTitleChange}
      />
      <InlineTextArea
        placeholder="Ingrese su texto"
        value={textValue}
        onChange={handleTextValue}
        clearValue={() => setTextValue('')}
        deleteLastChar={() => setTextValue(textValue.slice(0, -1))}
        wordsQuantity={textValue.length === 0 ? 0 : textValue.split(' ').length}
      />
    </section>
  );
};

export default connect()(Bloc);
