import merge from 'lodash/merge';

import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';

import { CLEAR_STORE } from '../actions/session_actions';


const TaskReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action.type, "action.type log");
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return merge({}, state, action.tasks);
    case RECEIVE_TASK:
      let nextS = merge({}, state);
      nextS[action.task] = action.task
      return nextS;
      // return action.task
    case CLEAR_STORE:
      return {};
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


// let obj = action.tasks
// let arr = Object.keys(obj).map(function (key) { return obj[key]; });
// console.table(arr, "arrayyy_@#(#(_#@%#$J#$_G_KGEF_GSKFDGyooooooo");
// let new_arr = [];
// arr.filter(task => {
//   if (task.project_id === 1) {
//     console.log(task, "TASK");
//     new_arr.push(task)
//   }
// });
// console.log(new_arr, "RETURN NEW ARR");
// return new_arr;
