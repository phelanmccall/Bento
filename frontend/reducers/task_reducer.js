import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const TaskReducer = (state = [], action) => {
  Object.freeze(state);

    // maybe structure this slice of state as an array instead of an object.

    // sorta works but obvs broke some stuff. fix in morning.

    // Need to map this differently, just had an idea. Tasks should be taken by matches to team (so we have everything that is currently on screen. NB we have all Teams on screen, all Projects on screen (just for one team at a time) and then all Tasks. Should just have all tasks by team, and then nest them in THEIR OWN slice of state. TODO nest as such:)

    // tasks: {proj1: [{t1}, {t2}, {t3}]} (only from current team. selector for this.)

  switch (action.type) {
    case RECEIVE_TASK:
    let newTask = {[action.task.id]: action.task };
    return merge([], state, newTask);
    case RECEIVE_ALL_TASKS:
      return action.tasks
    case REMOVE_TASK:
      let nextState = merge([], state);
      delete nextState[action.task.id];
      return nextState;
    case CLEAR_STORE:
      return [];
    default:
      return state;
  }
};

export default TaskReducer;
