import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import projectsReducer from './project_reducer'
import teamsReducer from './team_reducer';
import tasksReducer from './task_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  teams: teamsReducer
});

export default RootReducer;
