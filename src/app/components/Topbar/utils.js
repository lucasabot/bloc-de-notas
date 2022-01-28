import i18 from 'i18next';

import { HOME, HISTORY, BLOC, QUIZ } from 'constants/routes';

import styles from './styles.module.scss';

export const checkButtonDisabled = (buttonPath, currentPath) =>
  Array.isArray(buttonPath) ? buttonPath.includes(currentPath) : String(buttonPath) === String(currentPath);

export const arrayButtons = (goTo, pathName, disableButtons) => [
  {
    label: i18.t('Topbar:title'),
    className: styles.topBarTitle,
    onPress: () => goTo(HOME),
    bold: true,
    large: true,
    white: true,
    disabled: disableButtons
  },
  {
    label: i18.t('Topbar:goHome'),
    className: styles.topBarButton,
    onPress: () => goTo(HOME),
    disabled: checkButtonDisabled([HOME, '/home'], pathName) || disableButtons
  },
  {
    label: i18.t('Topbar:goBloc'),
    className: styles.topBarButton,
    onPress: () => goTo(BLOC),
    disabled: checkButtonDisabled(BLOC, pathName) || disableButtons
  },
  {
    label: i18.t('Topbar:goHistory'),
    className: styles.topBarButton,
    onPress: () => goTo(HISTORY),
    disabled: checkButtonDisabled(HISTORY, pathName)
  },
  {
    label: i18.t('Topbar:goSurvey'),
    className: styles.topBarButton,
    onPress: () => goTo(QUIZ),
    disabled: checkButtonDisabled(HISTORY, pathName) || disableButtons
  }
];
