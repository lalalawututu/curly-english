import { fromJS } from 'immutable';
import * as constants from './constants';
import zh_CN from '../../../locale/zh_CN';
// import en_US from '../../../locale/en_US';

const defaultState = fromJS({
  carouselPic1: require('../../../style/home/learnEnglish.png'),
  carouselPic2: require('../../../style/home/teacher.png'),
  carouselPic3: require('../../../style/home/english-dad.png'),
  scrollWidth: 1920,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CPONE:
      return state.set(
        'carouselPic1', require('../../../style/home/learnEnglish.png'),
        'carouselPic2', require('../../../style/home/teacher.png'),
        'carouselPic3', require('../../../style/home/english-dad.png'),
      );
    case constants.SCROLLWIDTH:
      return state.set(
        'scrollWidth', action.value,
    );
    default:
      return state;
  }
}