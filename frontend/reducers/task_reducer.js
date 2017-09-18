import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);

    // maybe structure this slice of state as an array instead of an object.

  switch (action.type) {
    case RECEIVE_TASK:
    let newTask = {[action.task.id]: action.task };
    return merge({}, state, newTask);
    case RECEIVE_ALL_TASKS:
      return action.tasks
    case REMOVE_TASK:
      let nextState = merge({}, state);
      delete nextState[action.task.id];
      return nextState;
    case CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export default TaskReducer;
