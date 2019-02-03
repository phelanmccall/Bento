import { connect } from 'react-redux';
import { fetchAllTeams, deleteTeam, updateTeamj, clearTeams } from '../../actions/team_actions';
import TeamIndex from './index_teams'

const mapStateToProps = ({...state}) => ({
  teams:        state.teams,
  currentTeam:  state.teams.currentTeam,
  currentUser:  state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTeams:  (user_id)  =>  dispatch(fetchAllTeams(user_id)),
  updateTeam:     (team)     =>  dispatch(updateTeam(team)),
  clearTeams:     ()         =>  dispatch(clearTeams()),
  destroyTeam:    (id)       =>  dispatch(deleteTeam(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
