import { connect } from 'react-redux';
import ProjectIndex from './index_projects';
import { SelectorAllProjects } from '../../reducers/selectors';

import {
  getAllProjects,
  deleteProject,
  updateProject,
} from '../../actions/project_actions';

const mapStateToProps = ({ projects, match }) => {
  return {
    projects: SelectorAllProjects(projects),
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: (teamId) => dispatch(getAllProjects(teamId)),
  updateProject: (proj) => dispatch(updateProject(proj)),
  destroyProject: (id) => dispatch(deleteProject(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
