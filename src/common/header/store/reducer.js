import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  headPicture: require('../../../style/header/logotext.png'),
  logo: require('../../../style/header/logo.jpg'),
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