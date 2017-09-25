import merge from 'lodash/merge';
import {
  RECEIVE_TASK,
  RECEIVE_ALL_TASKS,
  REMOVE_TASK,
} from '../actions/task_actions';
import { CLEAR_STORE } from '../actions/session_actions';

const TaskReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TASK:
      let newTask = {[action.task.id]: action.task };
      return merge([], state, newTask);
    case RECEIVE_ALL_TASKS:
      let tasks = action.tasks
      let taskArray = Object.keys(tasks).map(function (key) { return tasks[key]; });
      let projectsObject = {}
      let filteredTaskArray = [];
      taskArray.filter(task => {
        console.error(task, "the TASK! (from filter function in receive all reducer)");
        if (projectsObject[task.project_id] === undefined) {
          // console.log(projectsObject, "projectsObject IF");
          // console.log(projectsObject[task.project_id], "IF projectsObject[task.project_id]");
          projectsObject[task.project_id] = [task]
        } else {
          // console.log(projectsObject, "projectsObject ELSE");
          // console.log(projectsObject[task.project_id], "ELSE statement projectsObject[task.project_id]");
          projectsObject[task.project_id] = projectsObject[task.project_id]
        }
      });
      return projectsObject;
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
