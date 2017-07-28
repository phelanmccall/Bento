import { connect } from 'react-redux';

import { createProject } from '../../actions/project_actions';
import CreateProject from './create_project';
import IndexProjectContainer from '../projects/index_projects_container';

const mapStateToProps = ({ session, projects, teams }) => ({
  currentUser: session.currentUser,
  currentTeam: teams.currentTeam,
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
