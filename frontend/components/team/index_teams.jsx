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


    function buttonHideTeam(obj) {
      console.error(obj);
      console.log(document);
      var hideTeam = document.getElementById('root');
      console.log(hideTeam);
      if (hideTeam.style.display === 'none') {
        hideTeam.style.display = 'flex';
      } else {
        hideTeam.style.display = 'none';
      }
    }

    console.log(document.getElementById('workz'))

    return (
      <div className="HideWrapper">
        <button
          className="side-bar-button" onClick={buttonHideTeam(this)}>Buttonnnnnn</button>
        <div id="workz" className="team-index-initial-wrapper">

          // <button className="side-barr-button">{`🍱`}</button>

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
