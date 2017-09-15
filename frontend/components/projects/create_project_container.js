import { connect } from 'react-redux';

import { createProject } from '../../actions/project_actions';
import CreateProject from './create_project';

const mapStateToProps = ({ session, projects, teams, tasks }) => ({
  currentUser: session.currentUser,
  currentTeam: teams.currentTeam,
  projects,
  tasks,
});

const mapDispatchToProps = (dispatch) => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
