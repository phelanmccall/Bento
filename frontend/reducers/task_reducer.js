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
    case RECEIVE_TASK: {
      const receivedState = merge({}, state);

      if (receivedState[action.task.project_id] === undefined) {
        receivedState[action.task.project_id] = [action.task];
      } else {
        receivedState[action.task.project_id].push(action.task);
      }

      return merge({}, state, receivedState);
    }
    case RECEIVE_ALL_TASKS: {
      const tasks = action.tasks;

      console.log(Object.keys(tasks), 'tasks keys');

      const taskArray = Object.keys(tasks).map((key) => tasks[key]);
      const projectsObj = {};
      const filteredTaskArray = [];
      taskArray.filter((task) => {
        const taskProjectId = task.project_id;
        if (projectsObj[taskProjectId] === undefined) {
          projectsObj[taskProjectId] = [task];
        } else {
          projectsObj[taskProjectId] = projectsObj[taskProjectId]
            .concat(task);
        }
      });

      console.log(projectsObj);

      return projectsObj;
    }
    case REMOVE_TASK: {
      // Have to do some funky stuff since we are working with arrays in objects
      const prevState = merge({}, state);
      const projectTaskArray = prevState[action.task.project_id];
      const tasksMinusRemoved = [];
      projectTaskArray.filter((task) => {
        if (task.id !== action.task.id) tasksMinusRemoved.push(task)
      });

      prevState[action.task.project_id] = tasksMinusRemoved;
      return prevState;
    }
    case CLEAR_STORE:
      return [];
    default:
      return state;
  }
};

export default TaskReducer;
