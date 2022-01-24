import React, { useState, useRef, useEffect, Fragment } from 'react';
import { string, number, func, bool, shape } from 'prop-types';
import i18 from 'i18next';

import ButtonContainer from 'app/components/ButtonContainer';
import useToastContext from 'utils/hooks/useToastContext';

import NotepadButton from '../NotepadButton';

import styles from './styles.module.scss';
import { buttonsArray, calcTextClassNames } from './utils';
import { TEXTAREA_ROWS, TEXTAREA_COLS } from './constants';

const CustomTextArea = ({ value, placeholder, classNames, toggle, onBlur, ...others }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(value.length, value.length); // Setea el cursor al final
  }, []);

  const handleOnBlur = () => {
    toggle(false);
    if (onBlur) onBlur();
  };

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
      onBlur={handleOnBlur}
    />
  );
};

const InlineTextArea = ({
  value,
  placeholder,
  wordsQuantity,
  clearValue,
  deleteLastChar,
  setTextStyle,
  textClassNames,
  classNames = {},
  onBlur,
  onSave,
  clearOnSave,
  ...others
}) => {
  const [open, setOpen] = useState(false);

  const addToast = useToastContext();

  const toggleOpen = condition => {
    if (String(condition)) setOpen(condition);
    else setOpen(!open);
  };

  const buttonsFunctions = effect =>
    [
      {
        type: 'SAVE',
        action: () => {
          onSave();
          if (clearOnSave) clearValue();
          addToast(`Se guardo la nota correctamente.`);
        }
      },
      {
        type: 'CLEAR',
        action: () => {
          setTextStyle('clear');
          clearValue();
        }
      },
      {
        type: 'ITALIC',
        action: () => setTextStyle('italic')
      },
      {
        type: 'BOLD',
        action: () => setTextStyle('bold')
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
        <CustomTextArea
          toggle={toggleOpen}
          value={value}
          classNames={`${calcTextClassNames(textClassNames)} ${classNames.textArea}`}
          onBlur={onBlur}
          {...others}
        />
      ) : (
        <div className={`${styles.spanContainer} ${calcTextClassNames(textClassNames)} ${classNames.span}`}>
          <div
            role="textbox"
            tabIndex={0}
            className={`${styles.span} ${styles.spanFontSizeMedium} ${styles.spanSizer} ${calcTextClassNames(
              textClassNames
            )} ${classNames.text} `}
            onClick={toggleOpen}
            onKeyDown={toggleOpen}
          >
            {`${value || placeholder}`}
          </div>
        </div>
      )}
      <ButtonContainer className={`${classNames.buttonContainer}`}>
        <span className={`${styles.wordsQuantitySpan} `}>{`${i18.t(
          'Bloc:inlineTextArea:words'
        )}: ${wordsQuantity}`}</span>
        {buttonsArray.map(item => (
          <NotepadButton
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
  deleteLastChar: func,
  setTextStyle: func,
  onBlur: func,
  onSave: func,
  clearOnSave: bool,
  textClassNames: shape({ italic: bool, bold: bool }),
  classNames: shape({
    span: string,
    textArea: string,
    buttonContainer: string,
    text: string
  })
};

CustomTextArea.propTypes = {
  value: string,
  placeholder: string,
  toggle: func,
  classNames: string,
  onBlur: func
};

export default InlineTextArea;
