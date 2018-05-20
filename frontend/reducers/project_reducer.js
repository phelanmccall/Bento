import merge from 'lodash/merge';
import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      let newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    case RECEIVE_ALL_PROJECTS:
      let projArray = Object.values(action.projects);
      let taskArrObj = {};
      let taskArray = projArray.map((obj) => taskArrObj[obj.id] = obj.tasks);

      let newProjects = action.projects;
      let newTasks = taskArrObj;
      return merge({}, newProjects);
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
