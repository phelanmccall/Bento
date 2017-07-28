import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import IndexProjectContainer from '../projects/index_projects_container';
import { clearTeams } from '../../actions/team_actions'
import TeamFormContainer from '../team/team_form_container';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

  }

componentDidMount () {
  this.props.fetchAllTeams(this.props.currentUser.id);
  console.log("Comp did mount user id: " + this.props.currentUser.id);
}

componentWillReceiveProps(nextProps) {
  if (nextProps.currentUser.id !== this.props.currentUser.id) {
    this.props.fetchAllTeams(nextProps.currentUser.id);
  }
}

  render () {
    const { teams } = this.props;
    // console.error(teams);
    return (
      <div className="team-index-initial-wrapper">

        <div className="in-team-team-form-wrapper">
          <TeamFormContainer />
        </div>

        <ul>
        {teams && Object.values(teams).map((team, idx) => (
          <li className="team-index-li" key={`team-${idx}`}>
            <Link to={`/api/teams/${team.id}`}>{team.team_name}</Link>
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
