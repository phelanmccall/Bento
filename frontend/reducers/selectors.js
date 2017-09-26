import { values } from 'lodash';

export const SelectorAllProjects = (projects) => {
  let sorted = values(projects);

  return sorted.sort((a, b) => { a.index - b.index })
};

export const SelectorAllTasks = (tasks, projectId) => {
  // Just reduced a massive selector to a single line!
  return tasks[projectId];
};
//
