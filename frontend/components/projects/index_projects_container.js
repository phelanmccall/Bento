import { connect } from 'react-redux';

import { getAllProjects, deleteProject } from '../../actions/project_actions';
import ProjectIndex from './index_projects'


const mapStateToProps = (state, { match }) => ({
  projects: getallProjects()
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: () => dispatch(getAllProjects()),
  destroyProject: id => dispatch(deleteProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
