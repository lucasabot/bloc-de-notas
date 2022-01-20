import React, { useState, useRef, useEffect } from 'react';
import { string, oneOf, func } from 'prop-types';

import styles from './styles.module.scss';

const InlineInput = ({ type, inputValue, placeholder, className, onBlur, ...others }) => {
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleOnBlur = () => {
    toggleOpen();
    if (onBlur) onBlur();
  };

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  return open ? (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      value={inputValue}
      {...others}
      onClick={toggleOpen}
      onBlur={handleOnBlur}
    />
  ) : (
    // eslint-disable-next-line
    <span onClick={toggleOpen} className={`${styles.span} ${className}`}>
      {inputValue || placeholder}
    </span>
  );
};

InlineInput.propTypes = {
  inputValue: string,
  type: oneOf(['text', 'number', 'password', 'email']),
  placeholder: string,
  onBlur: func,
  className: string
};

export default InlineInput;
