import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.scss';

const InlineInput = ({ type, inputValue, placeholder, ...others }) => {
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  return open ? (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      value={inputValue}
      {...others}
      onClick={toggleOpen}
      onBlur={toggleOpen}
    />
  ) : (
    // eslint-disable-next-line
    <span onClick={toggleOpen} className={styles.span}>
      {inputValue || placeholder}
    </span>
  );
};

InlineInput.propTypes = {
  inputValue: propTypes.string,
  type: propTypes.oneOf(['text', 'number', 'password', 'email']),
  placeholder: propTypes.string
};

export default InlineInput;
