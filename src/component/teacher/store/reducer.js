import { fromJS } from 'immutable';

const defaultState = fromJS({
  teacher1: require('../../../style/teacher/Dusan.jpg'),
  teacher2: require('../../../style/teacher/Catherine.jpg'),
  teacher3: require('../../../style/teacher/Lee.jpg'),
  teacher4: require('../../../style/teacher/Abdul.jpg'),
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}