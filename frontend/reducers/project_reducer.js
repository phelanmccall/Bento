import merge from 'lodash/merge';
import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import { CLEAR_STORE } from '../actions/session_actions';
import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      action.project.tasks = {};
      let newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case REMOVE_PROJECT:
      let nextState = merge({}, state);
      delete nextState[action.project.id];
      return nextState;
    case CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export default ProjectReducer;
