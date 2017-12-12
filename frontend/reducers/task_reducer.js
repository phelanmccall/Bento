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
      console.log("%cHERE IS receivedState before<<<---:", "color: yellow; background-color: #030303;", receivedState);

      if (receivedState.byIds[action.task.project_id] === undefined) {
        receivedState.byIds[action.task.project_id] = [action.task];
      } else {
        receivedState.byIds[action.task.project_id].push(action.task);
      }

      console.log("%cHERE IS WHAT receivedState after--->>>", "color: cyan; background-color: #040404;", receivedState);

      return merge({}, state, receivedState);
    }
    case RECEIVE_ALL_TASKS: {
      const tasks = action.tasks;
      const taskArray = Object.keys(tasks).map((key) => tasks[key]);
      const projectsObj = {};
      const filteredTaskArray = [];
      taskArray.filter((task) => {
        const taskProjectId = task.project_id;
        // console.log("%cHERE IS WHAT task IS NOW:", "color: cyan; background-color: #040404;", task);
        // console.log("%cHERE IS WHAT projectsObj IS NOW:", "color: yellow; background-color: #040404;", projectsObj);
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
      // Have to do some funky stuff since we are working with arrays in objects
      const prevState = merge({}, state);
      const projectTaskArray = prevState.byIds[action.task.project_id];
      const tasksMinusRemoved = [];
      projectTaskArray.filter((task) => {
        if (task.id !== action.task.id) tasksMinusRemoved.push(task)
      });

      prevState.byIds[action.task.project_id] = tasksMinusRemoved;
      return prevState;
    }
    case CLEAR_STORE:
      return [];
    default:
      return state;
  };
};

export default TaskReducer;
