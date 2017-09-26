import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const TaskReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TASK:
      // let newTask = {[action.task.id]: action.task };
      // let newTask = {[action.task.project_id]: action.task };
      let receivedState = merge({}, state);
      console.log(receivedState[action.task.project_id], 'receivedState');

      if (receivedState[action.task.project_id] === undefined) {
        receivedState[action.task.project_id] = [action.task];
      } else {
        receivedState[action.task.project_id].push(action.task);
      }
      
      return merge({}, state, receivedState);
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
          projectsObject[taskProjectId] = projectsObject[taskProjectId]
            .concat(task);
        }
      });

      return projectsObject;
    case REMOVE_TASK:
      // Have to do some funky stuff since we are working with arrays in objects
      let prevState = merge({}, state);
      let projectTaskArray = prevState[action.task.project_id];
      let tasksMinusRemoved = [];
      projectTaskArray.filter((task) => {
        if (task.id !== action.task.id) {
          tasksMinusRemoved.push(task)
        }
      });

      prevState[action.task.project_id] = tasksMinusRemoved;
      return prevState;
    case CLEAR_STORE:
      return [];
    default:
      return state;
  }
};

export default TaskReducer;
