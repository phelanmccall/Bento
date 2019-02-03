import { connect } from 'react-redux';
import {
  createTeam
} from '../../actions/team_actions';
import TeamForm from './team_form';
import { createMembership } from '../../actions/membership_actions'

const mapStateToProps = (state) => {
  return {
    teams:        state.teams,
    currentUser:  state.session.currentUser,
    currentTeam:  state.teams.currentTeam,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTeam:        (team)        =>  dispatch(createTeam(team)),
    createMembership:  (membership)  =>  dispatch(createMembership(membership)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamForm);
