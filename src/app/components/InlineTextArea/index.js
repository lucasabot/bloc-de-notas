import React, { useState, useRef, useEffect, Fragment } from 'react';
import { string, number, func } from 'prop-types';
import i18 from 'i18next';

import ButtonContainer from 'app/screens/Bloc/components/ButtonContainer';

import MagicButton from '../MagicButton';

import styles from './styles.module.scss';
import { buttonsArray } from './utils';
import { TEXTAREA_ROWS, TEXTAREA_COLS } from './constants';

const CustomTextArea = ({ value, placeholder, classNames, toggle, ...others }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(value.length, value.length); // Setea el cursor al final
  }, []);

  return (
    <textarea
      cols={TEXTAREA_COLS}
      rows={TEXTAREA_ROWS}
      ref={inputRef}
      placeholder={placeholder}
      className={`${styles.input} ${styles.textArea} ${classNames}`}
      value={value}
      {...others}
      onClick={() => toggle(true)}
      onBlur={() => toggle(false)}
    />
  );
};

const InlineTextArea = ({ value, placeholder, wordsQuantity, clearValue, deleteLastChar, ...others }) => {
  const [open, setOpen] = useState(false);
  const [textClassNames, setTextClassNames] = useState([]);

  const toggleOpen = condition => {
    if (String(condition)) setOpen(condition);
    else setOpen(!open);
  };

  const setTextStyle = textStyle => {
    if (textClassNames.find(item => item === textStyle)) {
      setTextClassNames(textClassNames.filter(item => item !== textStyle));
    } else {
      setTextClassNames([...textClassNames, textStyle]);
    }
  };

  const buttonsFunctions = effect =>
    [
      {
        type: 'CLEAR',
        action: () => {
          setTextClassNames([]);
          clearValue();
        }
      },
      {
        type: 'ITALIC',
        action: () => setTextStyle(styles.italic)
      },
      {
        type: 'BOLD',
        action: () => setTextStyle(styles.bold)
      },
      {
        type: 'DELETE',
        action: () => deleteLastChar()
      }
    ]
      .find(({ type }) => type === effect)
      .action();

  return (
    <Fragment>
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
        <span className={styles.wordsQuantitySpan}>{`${i18.t(
          'Bloc:inlineTextArea:words'
        )}: ${wordsQuantity}`}</span>
        {buttonsArray.map(item => (
          <MagicButton
            buttonText={item.buttonText}
            onClick={() => buttonsFunctions(item.key)}
            key={item.key}
            className={item.className}
          />
        ))}
      </ButtonContainer>
    </Fragment>
  );
};

InlineTextArea.propTypes = {
  value: string,
  placeholder: string,
  wordsQuantity: number,
  clearValue: func,
  deleteLastChar: func
};

CustomTextArea.propTypes = {
  value: string,
  placeholder: string,
  toggle: func,
  classNames: string
};

export default InlineTextArea;
