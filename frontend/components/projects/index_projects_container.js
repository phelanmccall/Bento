import { connect } from 'react-redux';

import { getAllProjects, deleteProject, updateProject } from '../../actions/project_actions';

import ProjectIndex from '/Users/atom-c/Desktop/Working-Fullstack/Bento/frontend/components/projects/index_projects.jsx';

import { SelectorAllProjects } from '../../reducers/selectors';


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
