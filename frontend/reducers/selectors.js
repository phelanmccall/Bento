import { values } from 'lodash';

export const SelectorAllProjects = projects => {
  let sorted = values(projects);

  return sorted.sort((a, b) => {a.index - b.index})

};


export const SelectorAllTasks = tasks => {
  let sortedTasks = values(tasks);

  return sortedTasks.sort((a, b) => {a.index - b.index})
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
