import { values } from 'lodash';

export const SelectorAllProjects = (projects) => {
  let sorted = values(projects);

  return sorted.sort((a, b) => { a.index - b.index })

};

export const SelectorAllTasks = (tasks, projectId) => {
  // console.log(Array.isArray(tasks), "tasks.isArray");
  // if (Array.isArray(tasks)) { return tasks }
  // console.log(tasks, projectId, "===[[[[[[[SELECTOR]]]]]]]===");
  let arr = Object.keys(tasks).map(function (key) { return tasks[key]; });
  let new_arr = [];
  arr.filter(task => {
    if (task.project_id === projectId) {
      new_arr.push(task)
    }
  });

  return new_arr;
};
