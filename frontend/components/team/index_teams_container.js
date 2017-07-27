import { connect } from 'react-redux';

import { fetchAllTeams, deleteTeam, updateTeam } from '../../actions/team_actions';
import TeamIndex from './index_teams'

const mapStateToProps = (state) => ({
  teams: state.teams.entities,
  currentTeam: state.teams.currentTeam,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTeams: () => dispatch(fetchAllTeams()),
  updateTeam: (team) => dispatch(updateTeam(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
