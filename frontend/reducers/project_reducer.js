import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT
} from '../actions/project_actions';

const startState = Object.freeze({
});

const ProjectReducer = (state = startState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      let newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case REMOVE_PROJECT:
      let nextState = merge({}, state);
      delete nextState[action.project.id];
      return nextState;
    default:
      return state;
  }
};

export default ProjectReducer;
