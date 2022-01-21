import React, { useRef, useEffect } from 'react';
import { string, func } from 'prop-types';

import { TEXTAREA_ROWS, TEXTAREA_COLS } from './constants';
import styles from './styles.module.scss';

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

CustomTextArea.propTypes = {
  value: string,
  placeholder: string,
  toggle: func,
  classNames: string,
  onBlur: func
};

export default CustomTextArea;
