import { connect } from 'react-redux';
import ProjectIndexItem from '../projects/index_projects_items';
import { SelectorAllTasks } from '../../reducers/selectors';

import {
  deleteProject,
  updateProject,
} from '../../actions/project_actions';

const mapStateToProps = (props, { projectId }) => {
  console.log(props.tasks, "props.tasks");
  console.log(SelectorAllTasks(props.tasks, projectId), "selector tasks");
  return {
    tasks: SelectorAllTasks(props.tasks, projectId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateProject: (project) => dispatch(updateProject(project)),
  destroyProject: (id) => dispatch(deleteProject(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);
