import { connect } from 'react-redux';

import { getAllProjects, deleteProject, updateProject } from '../../actions/project_actions';
import ProjectIndex from './index_projects'
import { SelectorAllProjects } from '../../reducers/selectors'


const mapStateToProps = ({ projects }, { match }) => ({
  projects: SelectorAllProjects(projects)
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: () => dispatch(getAllProjects()),
  updateProject: (proj) => dispatch(updateProject(proj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);


// ,
// destroyProject: id => dispatch(deleteProject(id))
