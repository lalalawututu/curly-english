import { fromJS } from 'immutable';
import * as constants from './constants';
import zh_CN from '../../../locale/zh_CN';
// import en_US from '../../../locale/en_US';

const defaultState = fromJS({
  teacher1: require('../../../style/teacher/Dusan.jpg'),
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}