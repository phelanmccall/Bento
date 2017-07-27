import React from 'react';
import { withRouter } from 'react-router';

class TeamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: this.props.teams,
      owner_id: this.props.session.currentUser.id,
      team_name: "",
    }
  }

  displayTeamProjects(team) {
	return e => {
		e.preventDefault();
		this.props.receiveTeam(team);
	}
}

  displayProjects() {
    return (
    	<ul>
    		this.props.teams.map((team, idx) => {
    			<li>{team.projects.map(project</li>
    }
    </ul>
    );
  }


  render () {
    const { teams } = this.props;
    return (


    )
  }



}


export default withRouter(TeamIndex);
