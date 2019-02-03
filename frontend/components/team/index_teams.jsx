import React from 'react';
import TeamFormContainer from '../team/team_form_container';
import {
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';

// import {
//   clearTeams,
//   deleteTeam,
// } from '../../actions/team_actions'

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displaySelf: props.displaySelf }

    console.log('props at TeamIndex constructor', props);
    console.log('this.state at TeamIndex constructor', this.state);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTeams(this.props.currentUser.id);
    // console.log('%cHere is the history:', 'color: red; background-color: black;', this.props.history, this.props.history.location, this.props.history.location.pathname);
    if (this.props.history.location.pathname === '/') {
      this.props.history.push('/api/teams/1')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.id !== this.props.currentUser.id) {
      this.props.fetchAllTeams(nextProps.currentUser.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();

    let id = e.currentTarget.id;

    this.props.destroyTeam(id)
  }

  render() {
    const { teams } = this.props;

    const { displaySelf } = this.state;

    const display = 'flex';
    console.log(this.props);
    console.log(this.state);

    if (!displaySelf) {
      return null;
    }

    return (
      <div className='HideWrapper'>
        <div
          id='workz'
          style={{ display }}
          className='team-index-initial-wrapper'
        >
          <div className='in-team-team-form-wrapper'>
            <TeamFormContainer />
          </div>

          <ul className='team-index-ul'>
            {teams && Object.values(teams).map((team, idx) => (
              <li className='team-index-list-item' key={ `team-${idx}` }>
                <NavLink
                  key             = { team ? `/api/teams/${team.id}`  :  '1' }
                  className       = { team ? 'team-index-link'        :  '' }
                  activeClassName = { team ? 'reactive'               :  '' }
                  to              = { `/api/teams/${team ? team.id : '' }` }
                >
                  { team ? team.team_name : '' }
                </NavLink>
                <button
                  id = { team ? team.id : 79 }
                  onClick={ this.handleDelete }
                >0000killem</button>
              </li>
            ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default withRouter(TeamIndex);
