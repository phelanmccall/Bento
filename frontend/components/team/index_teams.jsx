import React from 'react';
import { withRouter } from 'react-router';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

  }

componentDidMount () {
  this.props.fetchAllTeams();
}

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


  render () {
    const { teams } = this.props;
    console.error(teams);
    return (
      <ul>
      {teams && Object.values(teams).map(team => (
        <li>{team.team_name}</li>
        )
      )}
      </ul>
    )
  }



}


export default withRouter(TeamIndex);
