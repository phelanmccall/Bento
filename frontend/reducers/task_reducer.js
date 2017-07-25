import merge from 'lodash/merge';

import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK
} from '../actions/task_actions';

const startState = Object.freeze({
});

const TaskReducer = (state = startState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TASK:
      let newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case REMOVE_TASK:
      let nextState = merge({}, state);
      delete nextState[action.task.id];
      return nextState;
    default:
      return state;
  }
};

export default TaskReducer;
