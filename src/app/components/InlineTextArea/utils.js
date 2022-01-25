import i18 from 'i18next';

import styles from './styles.module.scss';

export const buttonsFunctions = (
  effect,
  onSave,
  clearValue,
  clearOnSave,
  setTextStyle,
  deleteLastChar,
  addToast
) =>
  [
    {
      type: 'SAVE',
      action: () => {
        onSave();
        if (clearOnSave) clearValue();
        addToast(i18.t('DefaultMessages:addNoteSuccess'));
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

export const calcIfButtonDisabled = (key, canSave, isTextOpen, isTitleOpen, canApplyStyles) => {
  if (isTextOpen || isTitleOpen) return true;
  if (key === 'SAVE' && !canSave) return true;
  if ((key === 'BOLD' || key === 'ITALIC') && !canApplyStyles) return true;
};
