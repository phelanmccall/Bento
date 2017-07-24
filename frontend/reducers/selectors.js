import { values } from 'lodash';

export const SelectorAllProjects = state => {
  return values(state.projects);
};
