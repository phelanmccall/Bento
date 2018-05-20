import { values } from 'lodash';

export const SelectorAllProjects = (projects) => {
  let sorted = values(projects);

  return sorted.sort((a, b) => { a.index - b.index });
};

export const SelectorAllTasks = (tasks, projectId) => {
  // console.log("%ctasks",
  //             "color: magenta; background-color: black;",
  //             tasks);
  // console.log("%ctasks.byIds",
  //             "color: pink; background-color: black;",
  //             tasks.byIds);
  // console.log("%cprojectId",
  //             "color: skyblue; background-color: black;",
  //             projectId);
  if (tasks.byIds) {
    return tasks.byIds[projectId];
  }
};
