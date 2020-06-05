import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../component/home/store';
import { reducer as teacherReducer } from '../component/teacher/store';
// import { reducer as detailReducer } from '../pages/detail/store';
// import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  teacher: teacherReducer,
  // detail: detailReducer,
  // login: loginReducer
})