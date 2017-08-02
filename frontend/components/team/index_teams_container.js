import { connect } from 'react-redux';
import { fetchAllTeams, deleteTeam, updateTeamj, clearTeams } from '../../actions/team_actions';
import TeamIndex from './index_teams'

const mapStateToProps = (state) => ({
  teams: state.teams.entities,
  currentTeam: state.teams.currentTeam,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTeams: (user_id) => dispatch(fetchAllTeams(user_id)),
  updateTeam: (team) => dispatch(updateTeam(team)),
  clearTeams: () => dispatch(clearTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);