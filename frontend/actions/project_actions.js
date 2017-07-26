import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const getAllProjects = () => dispatch => {
  return APIUtil.getAllProjects().then(projects => dispatch(receiveAllProjects(projects)));
}

export const getSingleProject = (id) => dispatch => {
  return APIUtil.getSingleProject(id).then(project => dispatch(receiveProject(project)));
}

export const createProject = newProject => dispatch => {
  return APIUtil.createProject(newProject).then(project => dispatch(receiveProject(project)));
};

export const updateProject = (proj) => dispatch => {
  return APIUtil.updateProject(proj).then(updateThis => dispatch(receiveProject(updateThis)));
};

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id).then(removeThis => dispatch(removeProject(removeThis)));
};
