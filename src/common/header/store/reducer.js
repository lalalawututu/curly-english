import { fromJS } from 'immutable';
import * as constants from './constants';
import zh_CN from '../../../locale/zh_CN';
// import en_US from '../../../locale/en_US';

const defaultState = fromJS({
  toggleReferal: true,
  toggleBBT: true,
  toggleTutorial: true,
  toggleLanguage: true,
  toggleChat: true,
  toggleHow: true,
  language: zh_CN,
  headPicture: require('../../../style/img/header/dapptoss_Logo_CN.png'),
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.HOW:
      return state.merge({
        'toggleHow': !state.get('toggleHow'),
        'toggleReferal': true,
        'toggleBBT': true,
        'toggleLanguage': true,
        'toggleChat': true,
        'toggleTutorial': true,
      });
    case constants.REFERRAL:
      return state.merge({
        'toggleReferal': !state.get('toggleReferal'),
        'toggleBBT': true,
        'toggleLanguage': true,
        'toggleChat': true,
        'toggleTutorial': true,
        'toggleHow': true,
      });
    case constants.BBT:
      return state.merge({
        'toggleBBT': !state.get('toggleBBT'),
        'toggleReferal': true,
        'toggleLanguage': true,
        'toggleChat': true,
        'toggleTutorial': true,
        'toggleHow': true,
      });
    case constants.TUTORIAL:
      return state.merge({
        'toggleReferal': true,
        'toggleBBT': true,
        'toggleLanguage': true,
        'toggleChat': true,
        'toggleTutorial': !state.get('toggleTutorial'),
        'toggleHow': true,
      });
    case constants.LANGUAGE:
      return state.merge({
        'toggleLanguage': !state.get('toggleLanguage'),
        'toggleChat': true,
        'toggleTutorial':true,
      });
    case constants.CHAT:
      return state.merge({
        'toggleChat': !state.get('toggleChat'),
        'toggleReferal': true,
        'toggleBBT': true,
        'toggleLanguage': true,
        'toggleTutorial':true,
        'toggleHow': true,
      });
    case constants.LOGO:
      return state.set(
        'headPicture', action.language === 'zh_CN' ? require('../../../style/img/header/dapptoss_Logo_CN.png') : require('../../../style/img/header/dapptoss_Logo_EN.png'),
      );
    case constants.LANGUAGE_INFO:
      return state.set('language', action.language);
    default:
      return state;
  }
}