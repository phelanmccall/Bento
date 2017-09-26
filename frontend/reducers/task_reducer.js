import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action, action.task, 'action, action.task');
  switch (action.type) {
    case RECEIVE_TASK:
      // let newTask = {[action.task.id]: action.task };
      let newTask = {[action.task.project_id]: action.task };

      return merge({}, state, newTask);
    case RECEIVE_ALL_TASKS:
      let tasks = action.tasks;
      let taskArray = Object.keys(tasks)
        .map(function (key) { return tasks[key]; });

      let projectsObject = {};
      let filteredTaskArray = [];
      taskArray.filter((task) => {
        let taskProjectId = task.project_id;
        if (projectsObject[taskProjectId] === undefined) {
          projectsObject[taskProjectId] = [task];
        } else {
          projectsObject[taskProjectId] = projectsObject[taskProjectId].concat(task);
        }
      });

      return projectsObject;
    case REMOVE_TASK:
      let nextState = merge({}, state);
      delete nextState[action.task.project_id][action.task.id];
      return nextState;
    case CLEAR_STORE:
      return [];
    default:
      return state;
  }
};

export default TaskReducer;
