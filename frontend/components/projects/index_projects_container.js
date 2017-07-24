import { connect } from 'react-redux';

import { getAllProjects, deleteProject } from '../actions/project_actions';
import ProjectIndex from './index_projects'
import { SelectorAllProjects } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  projects: SelectorAllProjects(state)
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: () => dispatch(getAllProjects()),
  destroyProject: id => dispatch(deleteProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
