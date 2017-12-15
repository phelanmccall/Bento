import { values } from 'lodash';

export const SelectorAllProjects = (projects) => {
  let sorted = values(projects);

  return sorted.sort((a, b) => { a.index - b.index });
};

export const SelectorAllTasks = (tasks, projectId) => {
  // Just reduced a massive selector to a single line!
  // console.log("%cHere's tasks, and tasks.byIds, and projectId", "color: green; background-color: black;", tasks, tasks.byIds, projectId);
  return tasks.byIds[projectId];
};
