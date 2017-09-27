import { connect } from 'react-redux';
import ProjectIndexItem from '../projects/index_projects_items';
import { SelectorAllTasks } from '../../reducers/selectors';

import {
  deleteProject,
  updateProject,
} from '../../actions/project_actions';

const mapStateToProps = (props, { projectId }) => {
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
