import * as constants from './constants';

export const toggleHow = () => ({
  type: constants.HOW,
});

export const toggleReferral = () => ({
  type: constants.REFERRAL,
});

export const handleToggleBBT = () => ({
  type: constants.BBT,
});

export const toggleTutorial = () => ({
  type: constants.TUTORIAL,
});

export const toggleLanguage = () => ({
  type: constants.LANGUAGE,
});

export const toggleChat = () => ({
  type: constants.CHAT,
});

export const toggleLogo = (language) => ({
  type: constants.LOGO,
  language
});

export const getLanguageInfo = (language) => ({
  type: constants.LANGUAGE_INFO,
  language
});