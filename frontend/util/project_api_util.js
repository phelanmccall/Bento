export const getAllProjects = (teamId) => {
  console.log("API Util team id: " + teamId);
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
    dataType: 'JSON',
    data: {
      project: {
        team_id: teamId
      }
    }
  });
};

export const getSingleProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project }
  });
};

export const updateProject = (project) => {
  // console.log("Hi, i'm the project in the api util", project);
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project }
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
