import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT,
  RECEIVE_ALL_PROJECTS,
  REMOVE_PROJECT,
} from '../actions/project_actions';

import { CLEAR_STORE } from '../actions/session_actions';

import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

const ProjectReducer = (state = {}, action) => {
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
      return {};
    default:
      return state;
  }
};

export default ProjectReducer;

//  Make change to receive task here.

//WORKING STUFF:

// import merge from 'lodash/merge';
//
// import {
//   RECEIVE_PROJECT,
//   RECEIVE_ALL_PROJECTS,
//   REMOVE_PROJECT,
// } from '../actions/project_actions';
//
// import { CLEAR_STORE } from '../actions/session_actions';
//
// import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
//
// const ProjectReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch (action.type) {
//     case RECEIVE_PROJECT:
//       action.project.tasks = {};
//       let newProject = {[action.project.id]: action.project};
//       return merge({}, state, newProject);
//     case RECEIVE_ALL_PROJECTS:
//       return merge({}, state, action.projects);
//     case REMOVE_PROJECT:
//       let nextState = merge({}, state);
//       delete nextState[action.project.id];
//       return nextState;
//     case CLEAR_STORE:
//       return {};
//     case RECEIVE_TASK:
//       let taskProject = state[action.task.project_id];
//       taskProject.tasks[action.task.id] = action.task;
//       return merge({}, state, {[action.task.project_id]: taskProject})
//     case REMOVE_TASK:
//       let tasksProject = state[action.task.project_id];
//       let nextStates = merge({}, state);
//       delete nextStates[tasksProject.id].tasks[action.task.id];
//       return nextStates;
//     default:
//       return state;
//   }
// };
//
// export default ProjectReducer;


// OLD LEGACY

//
// import { CLEAR_STORE } from '../actions/session_actions';
//
// import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
//
// const ProjectReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   switch (action.type) {
//     case RECEIVE_PROJECT:
//       action.project.tasks = {};
//       let newProject = {[action.project.id]: action.project};
//       return merge({}, state, newProject);
//     case RECEIVE_ALL_PROJECTS:
//       return merge({}, state, action.projects);
//     case REMOVE_PROJECT:
//       let nextState = merge({}, state);
//       delete nextState[action.project.id];
//       return nextState;
//     case CLEAR_STORE:
//       return {};
//     case RECEIVE_TASK:
//       let taskProject = state[action.task.project_id];
//       taskProject.tasks[action.task.id] = action.task;
//       return merge({}, state, {[action.task.project_id]: taskProject})
//     case REMOVE_TASK:
//       let tasksProject = state[action.task.project_id];
//       tasksProject.tasks[action.task.id] = action.task;
//       delete state[action.task.id];
//       return merge({}, state);
//
//       // delete state[action.task.id];
//       // return merge({}, state);
//     default:
//       return state;
//   }
// };
//
// export default ProjectReducer;



//
// case REMOVE_TASK:
//   let tasksProject = state[action.task.project_id];
//   let nextStates = merge({}, state);
//   delete nextStates[tasksProject.id].tasks[action.task.id];
//   return nextStates;
// default:
//   return state;
// }
// };
//
// export default ProjectReducer;


// tasksProject.tasks[action.task.id] = action.task;
// delete state[action.task.id];
// console.log("STATEN", state);
// console.log("merge", merge({}, state));
// console.log(state === merge({}, state));
// return merge({}, state);
// For task deletion::


// console.log(nextStates, "Next States Returned");


// delete state[action.task.id];
// return merge({}, state);



// WORKING CODE FOR NESTED state

// case RECEIVE_TASK:
//   let next = merge({}, state);
//   // let taskProject = state[action.task.project_id];
//   // taskProject.tasks[action.task.id] = action.task;
//   // console.log(action.task.project_id)
//   // console.log(next[action.task.project_id].tasks[action.task.id])
//   next[action.task.project_id].tasks[action.task.id] = action.task;
//   // return merge({}, state, {[action.task.project_id]: taskProject})
//   return next
// case REMOVE_TASK:
//   let tasksProject = state[action.task.project_id];
//   let nextStates = merge({}, state);
//   delete nextStates[tasksProject.id].tasks[action.task.id];
//   return nextStates;
