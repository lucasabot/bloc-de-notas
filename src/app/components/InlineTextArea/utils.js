import { NOTEPAD_ACTIONS } from 'constants/notepadActions';

import styles from './styles.module.scss';

export const calcTextClassNames = textStyles =>
  `${textStyles.bold && styles.bold} ${textStyles.italic && styles.italic}`;

export const buttonsFunctions = (effect, onSave, clearValue, clearOnSave, setTextStyle, deleteLastChar) =>
  [
    {
      type: NOTEPAD_ACTIONS.SAVE,
      action: () => {
        onSave();
        if (clearOnSave) clearValue();
      }
    },
    {
      type: NOTEPAD_ACTIONS.CLEAR,
      action: () => {
        setTextStyle(NOTEPAD_ACTIONS.CLEAR);
        clearValue();
      }
    },
    {
      type: NOTEPAD_ACTIONS.ITALIC,
      action: () => setTextStyle(NOTEPAD_ACTIONS.ITALIC)
    },
    {
      type: NOTEPAD_ACTIONS.BOLD,
      action: () => setTextStyle(NOTEPAD_ACTIONS.BOLD)
    },
    {
      type: NOTEPAD_ACTIONS.DELETE,
      action: () => deleteLastChar()
    }
  ]
    .find(({ type }) => type === effect)
    .action();

export const calcIfButtonDisabled = (key, canSave, isTextOpen, isTitleOpen, canApplyStyles) => {
  if (isTextOpen || isTitleOpen) return true;
  if (key === NOTEPAD_ACTIONS.SAVE && !canSave) return true;
  if ((key === NOTEPAD_ACTIONS.BOLD || key === NOTEPAD_ACTIONS.ITALIC) && !canApplyStyles) return true;
};
