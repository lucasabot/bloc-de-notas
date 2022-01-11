import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import ButtonContainer from 'app/screens/Bloc/components/ButtonContainer';

import MagicButton from '../MagicButton';

import styles from './styles.module.scss';

const CustomTextArea = ({ value, placeholder, classNames, toggle, ...others }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(value.length, value.length); // Setea el cursor al final
  }, []);

  return (
    <textarea
      cols="30"
      rows="10"
      ref={inputRef}
      placeholder={placeholder}
      className={`${styles.input} ${styles.textArea} ${classNames}`}
      value={value}
      {...others}
      onClick={toggle}
      onBlur={toggle}
    />
  );
};

const InlineTextArea = ({ value, placeholder, wordsQuantity, clearValue, deleteLastChar, ...others }) => {
  const [open, setOpen] = useState(false);
  const [textClassNames, setTextClassNames] = useState([]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const setTextStyle = textStyle => {
    if (textClassNames.find(item => item === textStyle)) {
      setTextClassNames(textClassNames.filter(item => item !== textStyle));
    } else {
      setTextClassNames([...textClassNames, textStyle]);
    }
  };

  const buttonsFunctions = effect => {
    switch (effect) {
      case 'CLEAR':
        setTextClassNames([]);
        clearValue();
        break;
      case 'ITALIC':
        setTextStyle(styles.italic);
        break;
      case 'BOLD':
        setTextStyle(styles.bold);
        break;
      case 'DELETE':
        deleteLastChar();
        break;
      default:
        break;
    }
  };

  const buttonsArray = [
    {
      buttonText: <b className={styles.spanFontSize}>CLEAR</b>,
      onClick: () => buttonsFunctions('CLEAR'),
      key: 'CLEAR',
      className: styles.clearButton
    },
    {
      buttonText: <i className={styles.spanFontSize}>Italic</i>,
      onClick: () => buttonsFunctions('ITALIC'),
      key: 'italic'
    },
    {
      buttonText: <b className={styles.spanFontSize}>Bold</b>,
      onClick: () => buttonsFunctions('BOLD'),
      key: 'bold'
    },
    {
      buttonText: <b className={styles.spanFontSize}>◄</b>,
      onClick: () => buttonsFunctions('DELETE'),
      key: 'DELETE',
      className: styles.deleteButton
    }
  ];

  return (
    <>
      {open ? (
        <CustomTextArea toggle={toggleOpen} value={value} classNames={textClassNames.join(' ')} {...others} />
      ) : (
        <div className={styles.spanContainer}>
          <div
            role="textbox"
            tabIndex={0}
            className={`${styles.span} ${styles.spanFontSizeMedium} ${styles.spanSizer} ${textClassNames.join(
              ' '
            )}`}
            onClick={toggleOpen}
            onKeyDown={toggleOpen}
          >
            {value || placeholder}
          </div>
        </div>
      )}
      <ButtonContainer>
        <span className={styles.wordsQuantitySpan}>{`Palabras: ${wordsQuantity}`}</span>
        {buttonsArray.map(item => (
          <MagicButton
            buttonText={item.buttonText}
            onClick={item.onClick}
            key={item.key}
            className={item.className}
          />
        ))}
      </ButtonContainer>
    </>
  );
};

InlineTextArea.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  wordsQuantity: propTypes.number,
  clearValue: propTypes.func,
  deleteLastChar: propTypes.func
};

CustomTextArea.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  toggle: propTypes.func,
  classNames: propTypes.string
};

export default InlineTextArea;
