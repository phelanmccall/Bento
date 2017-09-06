import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';

import { CLEAR_STORE } from '../actions/session_actions';

import { RECEIVE_TASK, REMOVE_TASK, updateTask, deleteTask } from '../actions/task_actions';

const startState = Object.freeze({
});

const ProjectReducer = (state = startState, action) => {
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
      return startState;
    case RECEIVE_TASK:
      let taskProject = state[action.task.project_id];
      taskProject.tasks[action.task.id] = action.task;

      return merge({}, state, {[action.task.project_id]: taskProject})
    case REMOVE_TASK:
      let taskyProject = state[action.task.project_id];
      taskyProject.tasks[action.task.id] = action.task;

      let nextyState = merge({}, state);
      delete nextyState[action.task.id];
      return nextyState;
    default:
      return state;
  }
};

export default ProjectReducer;
