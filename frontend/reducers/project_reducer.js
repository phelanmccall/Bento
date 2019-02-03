import merge from 'lodash/merge';
import {reducerLog, logHelper} from '../util/log_helpers';

import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  const receivedState   =  merge({}, state);
  const actionProject   =  action.project;
  const actionProjects  =  action.projects;

  switch (action.type) {
    case RECEIVE_PROJECT:
      reducerLog('RECEIVE_PROJECT project', {receivedState});
      reducerLog('RECEIVE_PROJECT project', {actionProject});
      if (!receivedState.indicesOrder ||
            !receivedState.indicesOrder.includes(actionProject.id)) {
        logHelper('RECEIVE_PROJECT project', 'created new project IF',
                  'navy', 'white');
        receivedState.indicesOrder = receivedState.indicesOrder || []
        receivedState.indicesOrder.push(actionProject.id).uniq
      } else {
        logHelper('RECEIVE_PROJECT project', 'created new project ELSE',
                  'navy', 'white');
      }

      return merge(receivedState, { [actionProject.id]: actionProject });
    case RECEIVE_ALL_PROJECTS:

      reducerLog('RECEIVE_ALL_PROJECTS project', {actionProjects});

      return merge({}, actionProjects);
    case REMOVE_PROJECT:

      receivedState.indicesOrder.splice(actionProject.index, 1)
      receivedState.indicesOrder.forEach((projectId, index) => {
        receivedState[projectId].index = index
      })

      delete receivedState[action.project.id];

      return receivedState;
    case CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

// simply assigns key in state (from root reducer) to returned obj
export default ProjectReducer;
