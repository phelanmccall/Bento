import { values } from 'lodash';

export const SelectorAllProjects = projects => {
  return values(projects);
};


export const SelectorAllTasks = tasks => {
  return values(tasks);
};


// export const SelectorAllTasks = ({ tasks }, projectId) => {
//   const tasksArr = values(tasks).map((taskId) => tasks[taskId]);
//
//   const projectTasks = tasksArr.filter(
//     (task) => task.project_id === projectId
//   );
//
//   return projectTasks;
// };
