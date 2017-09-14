import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';


const TaskReducer = (state = {}, action) => {
  Object.freeze(state);

  const updatedState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return merge(updatedState, action.tasks);
    case RECEIVE_TASK:
      return merge(updatedState, { [action.task.id]: action.task })
    case REMOVE_TASK:
      delete updatedState[action.taskId];
      return updatedState;
    case CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export default TaskReducer;
