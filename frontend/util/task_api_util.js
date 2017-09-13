export const projection = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/project'
  });
};

export const getAllTasksFromProjects = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/tasks',
    dataType: 'JSON',
    data: {
      task: {
        project_id: projectId
      }
    }
  });
};

export const getAllTasks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tasks'
  });
};

export const getSingleTasks = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`
  });
};

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  });
};

export const updateTask = (task) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteTask = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  });
};
