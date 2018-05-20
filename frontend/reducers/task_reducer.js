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

      if (receivedState.byIds[action.task.project_id] === undefined) {
        receivedState.byIds[action.task.project_id] = [action.task];
        receivedState.allIds.push(action.task);
      } else {
        receivedState.byIds[action.task.project_id].push(action.task);
        receivedState.allIds.push(action.task.id);
      }

      return merge({}, state, receivedState);
    }
    case RECEIVE_ALL_TASKS: {
      const tasks = action.tasks;
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

      const taskArrayIds = taskArray.map((task) => task.id);
      const fullState = {};
      fullState['byIds'] = projectsObj;
      fullState['allIds'] = taskArrayIds;
      return fullState;
    }
    case REMOVE_TASK: {
      const prevState = merge({}, state);
      const projectTaskArray = prevState.byIds[action.task.project_id];
      const prevAllIdArrays = prevState.allIds;
      const tasksMinusRemoved = [];
      const tasksIdsWithout = [];

      projectTaskArray.filter((task) => {
        if (task.id !== action.task.id) {
          tasksMinusRemoved.push(task);
        }
      });
      prevAllIdArrays.forEach((taskId) => {
        if (taskId !== action.task.id) tasksIdsWithout.push(taskId)
      });

      prevState.byIds[action.task.project_id] = tasksMinusRemoved;
      prevState.allIds = tasksIdsWithout;
      return prevState;
    }
    case CLEAR_STORE:
      return [];
    default:
      return state;
  };
};

export default TaskReducer;
