import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";


export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task,
});

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks,
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task,
});

export const getAllTasksFromProjects = (teamId) => dispatch => {
  return APIUtil.getAllTasksFromProjects(teamId)
    .then(tasks => {
      dispatch(receiveAllTasks(tasks));
    });
}

export const getSingleTask = (id) => dispatch => {
  return APIUtil.getSingleTask(id)
  .then(
    task => dispatch(receiveTask(task))
  );
}

export const createTask = (newTask) => dispatch => {
  return APIUtil.createTask(newTask)
    .then(
      task => dispatch(receiveTask(task))
    );
};

export const updateTask = (task) => dispatch => {
  return APIUtil.updateTask(task)

  .then(
    updateThis => dispatch(receiveTask(updateThis))
  );
};

export const deleteTask = (id) => dispatch => {
  return APIUtil.deleteTask(id)
    .then(removeThis => dispatch(removeTask(removeThis))
  );
};
