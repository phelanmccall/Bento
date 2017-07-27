import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import projectsReducer from './project_reducer'
import teamsReducer from './team_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: projectsReducer,
  teams: teamsReducer
});

export default RootReducer;


// teams: teamsReducer
