import { fromJS } from 'immutable';
import * as constants from './constants';
import zh_CN from '../../../locale/zh_CN';
// import en_US from '../../../locale/en_US';

const defaultState = fromJS({
  headPicture: require('../../../style/header/logotext.png'),
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.LOGO:
      return state.set(
        'headPicture', require('../../../style/header/logotext.png'),
      );
    default:
      return state;
  }
}