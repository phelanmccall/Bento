import { values } from 'lodash';

export const SelectorAllProjects = projects => {
  let sorted = values(projects);

  return sorted.sort((a, b) => {a.index - b.index})

};


export const SelectorAllTasks = (tasks, projectId) => {
  // let sortedTasks = values(tasks);
  //
  // return sortedTasks.sort((a, b) => {a.index - b.index})
  // console.log(state, "state");
  // console.log(props, "props");
  // console.log(values(tasks), "tasks");
  // console.log(projectId, "projectId");
  let arr = Object.keys(tasks).map(function (key) { return tasks[key]; });
  let new_arr = [];
  arr.filter(task => {
    if (task.project_id === projectId) {
      new_arr.push(task)
    }
  });
  // console.log(new_arr);
  return new_arr;
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
