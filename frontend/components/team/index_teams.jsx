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
      // console.error(obj);
      // console.log(document);
      // var hideTeam = document.getElementById('root');
      // console.log(hideTeam);
      // if (hideTeam.style.display === 'none') {
      //   hideTeam.style.display = 'flex';
      // } else {
      //   hideTeam.style.display = 'none';
      // }
    }

    // console.log(document.getElementById('workz'))

    const display = "none";

    return (
      <div className="HideWrapper">
        <div id="workz" style={ { display } }className="team-index-initial-wrapper">



          <div className="in-team-team-form-wrapper">
            <TeamFormContainer />
          </div>

          <ul className="team-index-ul">
          {teams && Object.values(teams).map((team, idx) => (
            <li className="team-index-list-item" key={`team-${idx}`} to={`/api/teams/${team.id}`}>
              <NavLink
                className="team-index-link"
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



// <button

//   className="side-bar-button" onClick={buttonHideTeam(this)}>Buttonnnnnn</button>

// <button className="side-barr-button">{`🍱`}</button>


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
