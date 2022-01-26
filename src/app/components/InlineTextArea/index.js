import React, { useState, Fragment } from 'react';
import { string, number, func, bool, shape } from 'prop-types';
import i18 from 'i18next';

import ButtonContainer from 'app/components/ButtonContainer';
import useToastContext from 'utils/hooks/useToastContext';
import NotepadButton from 'app/components/NotepadButton';
import CustomTextArea from 'app/components/CustomTextArea';

import { buttonsFunctions, calcTextClassNames } from './utils';
import styles from './styles.module.scss';
import { buttonsArray } from './constants';

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
  canSave,
  isTitleOpen,
  ...others
}) => {
  const [open, setOpen] = useState(false);

  const addToast = useToastContext();

  const toggleOpen = condition => {
    if (String(condition)) setOpen(condition);
    else setOpen(!open);
  };

  const handleNotePadButtons = buttonPresed =>
    buttonsFunctions(buttonPresed, onSave, clearValue, clearOnSave, setTextStyle, deleteLastChar, addToast);

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
            {value || placeholder}
          </div>
        </div>
      )}
      <ButtonContainer className={`${classNames.buttonContainer}`}>
        <span className={`${styles.wordsQuantitySpan}`}>
          {i18.t('Bloc:inlineTextArea:words', {
            wordsQuantity
          })}
        </span>
        {buttonsArray.map(item => (
          <NotepadButton
            buttonText={item.buttonText}
            onClick={() => handleNotePadButtons(item.key)}
            key={item.key}
            className={item.className}
            disabled={(item.key === 'SAVE' && !canSave) || !value?.length > 0 || open || isTitleOpen}
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
  canSave: bool,
  isTitleOpen: bool,
  textClassNames: shape({ italic: bool, bold: bool }),
  classNames: shape({
    span: string,
    textArea: string,
    buttonContainer: string,
    text: string
  })
};

export default InlineTextArea;
