import merge from 'lodash/merge';

import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';

import { CLEAR_STORE } from '../actions/session_actions';

const startState = Object.freeze({
});

const TaskReducer = (state = startState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_TASKS:
      return action.tasks;

    case CLEAR_STORE:
      return startState;
    default:
      return state;
  }
};

export default TaskReducer;


// switch (action.type) {
//
//   case RECEIVE_ALL_TASKS:
//     return merge({}, state, action.tasks);
//   case RECEIVE_TASK:
//     let newTask = {[action.task.id]: action.task};
//     return merge({}, state, newTask);
//   // case REMOVE_TASK:
//   //   console.log(state, "straight up state");
//   //   let nextState = merge({}, state);
//   //   console.log(nextState, "nextstate heyyy");
//   //   console.log(action.task, "action.task");
//   //   console.log(action.task.id, "action.task.id");
//   //   console.log(nextState[action.task.id], "THE ACTION.TASK.ID>>>>NS!");
//   //   delete nextState[action.task.id];
//   //   console.log(nextState, "NEXT STATE_____!");
//   //   return nextState;
//   default:
//     return state;
// }
// };
//
// export default TaskReducer;
