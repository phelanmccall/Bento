import { connect } from 'react-redux';

import { deleteProject, updateProject } from '../../actions/project_actions';

import {getAllTasksFromProjects} from '../../actions/task_actions';

import ProjectIndexItem from '/Users/atom-c/Desktop/Working-Fullstack/Bento/frontend/components/projects/index_projects_items.jsx';

import { SelectorAllTasks } from '../../reducers/selectors';

const mapStateToProps = (props, { projectId } ) => {
  console.log(projectId, "PLEASE PLEASE");
  console.error(SelectorAllTasks(props.tasks, projectId), "SELECTED");

  return {
    tasks: SelectorAllTasks(props.tasks, projectId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (projectId) => dispatch(getAllTasksFromProjects(projectId)),
  // updateProject: (project) => dispatch(updateProject(project)),
  // destroyProject: (id) => dispatch(deleteProject(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);
