import { values } from 'lodash';

export const SelectorOrderAllProjects = (projects) => {
  const idsInOrder = projects.indicesOrder;
  if (idsInOrder) {
    console.log('%cSelectorOrderAllProjects IF idsInOrder',
                'color:magenta; background-color:black;',
                idsInOrder);
    console.log('%cSelectorOrderAllProjects IF projects',
                'color:magenta; background-color:black; border: 1px solid white',
                projects);
    // return projects
    return idsInOrder.sort((a, b) => { a.index - b.index }).map((projId) => projects[projId])
  } else {
    console.log('%cSelectorOrderAllProjects ELSE values(projects)',
                'color:magenta; background-color:black;',
                values(projects));
    let sorted = values(projects);
    // return projects
    return sorted.sort((a, b) => { a.index - b.index });
  }
};

// export const SelectorOrderProjectIds = (projectsIndicesOrder) => {
//   SelectorOrderProjectIds
// };

export const SelectorAllTasks = (tasks, projectId) => {
  // console.log('%ctasks',
  //             'color: magenta; background-color: black;',
  //             tasks);
  // console.log('%ctasks.byIds',
  //             'color: pink; background-color: black;',
  //             tasks.byIds);
  // console.log('%cprojectId',
  //             'color: skyblue; background-color: black;',
  //             projectId);
  if (tasks.byIds) {
    return tasks.byIds[projectId];
  }
};
