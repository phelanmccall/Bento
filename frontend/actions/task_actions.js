import * as APIUtil from '../util/task_api_util';

/*
 * action types
 * way to constantize strings for universal use
 */

export const RECEIVE_TASK       =  'RECEIVE_TASK';
export const RECEIVE_ALL_TASKS  =  'RECEIVE_ALL_TASKS';
export const REMOVE_TASK        =  'REMOVE_TASK';

/*
 * action creators
 * take the action type, and a payload
 */

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task,
});

const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks,
});

const removeTask = task => ({
  type: REMOVE_TASK,
  task,
});

export const getAllTasksFromProjects = (teamId) => dispatch => {
  return APIUtil.getAllTasksFromProjects(teamId).then(
    tasks => {
      dispatch(receiveAllTasks(tasks));
    }
  );
};

export const getSingleTask = (id) => dispatch => {
  return APIUtil.getSingleTask(id).then(
    task => dispatch(receiveTask(task))
  );
};

export const createTask = (newTask) => dispatch => {
  return APIUtil.createTask(newTask).then(
    task => dispatch(receiveTask(task))
  );
};

export const updateTask = (task) => dispatch => {
  return APIUtil.updateTask(task).then(
    task => dispatch(receiveTask(task))
  );
};

export const deleteTask = (id) => dispatch => {
  return APIUtil.deleteTask(id).then(
    id => dispatch(removeTask(id))
  );
};
