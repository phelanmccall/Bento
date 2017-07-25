import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTasks = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const removeTasks = task => ({
  type: REMOVE_TASK,
  task
});

export const getAllTasks = () => dispatch => {
  return APIUtil.getAllTasks().then(tasks => dispatch(receiveAllTasks(tasks)));
}

export const getSingleTasks = (id) => dispatch => {
  return APIUtil.getSingleTasks(id).then(task => dispatch(receiveTasks(task)));
}

export const createTasks = newTasks => dispatch => {
  return APIUtil.createTasks(newTasks).then(task => dispatch(receiveTasks(task)));
};

export const updateTasks = id => dispatch => {
  return APIUtil.updateTasks(id).then(updateThis => dispatch(receiveTasks(updateThis)));
};

export const deleteTasks = id => dispatch => {
  return APIUtil.deleteTasks(id).then(removeThis => dispatch(removeTasks(removeThis)));
};