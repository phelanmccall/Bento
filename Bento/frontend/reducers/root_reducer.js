import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import teamsReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  teams: teamsReducer
});

export default RootReducer;
