import { values } from 'lodash';

export const SelectorAllProjects = projects => {
  return values(projects);
};


export const SelectorAllTasks = tasks => {
  return values(tasks);
};
