import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import IndexProjectContainer from '../projects/index_projects_container';
import { clearTeams } from '../../actions/team_actions'
import TeamFormContainer from '../team/team_form_container';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

  }

componentDidMount () {
  this.props.fetchAllTeams(this.props.currentUser.id);
}

componentWillReceiveProps(nextProps) {
  if (nextProps.currentUser.id !== this.props.currentUser.id) {
    this.props.fetchAllTeams(nextProps.currentUser.id);
  }
}

  render () {
    const { teams } = this.props;

    return (
      <div className="team-index-initial-wrapper">

        <button className="side-bar-button">{`🍱`}</button>

        <div className="in-team-team-form-wrapper">
          <TeamFormContainer />
        </div>

        <ul>
        {teams && Object.values(teams).map((team, idx) => (
          <li className="team-index" key={`team-${idx}`}>
            <NavLink
              className="team-index"
              activeClassName="reactive" to={`/api/teams/${team.id}`}>{team.team_name}</NavLink>
          </li>
          )
        )}
        </ul>

      </div>
    )
  }



}


export default withRouter(TeamIndex);






//   displayTeams() {
//   	return e => {
//   		e.preventDefault();
//   		this.props.receiveTeam(team);
// 	}
// }

// displayProjects(team) {
//   return (
//   	<ul>
//   		this.props.teams.map((team, idx) => {
//   			<li>{team.projects.map(project</li>
//   }
//   </ul>
//   );
// }
