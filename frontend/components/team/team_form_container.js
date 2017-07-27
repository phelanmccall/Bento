import { connect } from 'react-router';
import {
  createTeam
} from '../../team_actions';
import TeamForm from './team_form';

mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    createTeam: (team) => dispatch(createTeam(team))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamForm);
