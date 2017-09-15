import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import IndexProjectContainer from '../projects/index_projects_container';
import { clearTeams, destroyTeam } from '../../actions/team_actions'
import TeamFormContainer from '../team/team_form_container';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    this.props.fetchAllTeams(this.props.currentUser.id);
    this.props.history.push(`/api/teams/${1}`)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.id !== this.props.currentUser.id) {
      this.props.fetchAllTeams(nextProps.currentUser.id);
    }
  }

  render () {
    const { teams } = this.props;


    function buttonHideTeam(obj) {
    }
    const display = "flex";

    return (
      <div className="HideWrapper">
        <div id="workz" style={ { display } }className="team-index-initial-wrapper">

          <div className="in-team-team-form-wrapper">
            <TeamFormContainer />
          </div>

          <ul className="team-index-ul">
            {teams && Object.values(teams).map((team, idx) => (
              
              <li className="team-index-list-item" key={`team-${idx}`} >
                <NavLink
                  className={team ? "team-index-link" : ""}
                  activeClassName={team ? "reactive" : ""} to={team ? `/api/teams/${team.id}` : `/api/teams/`}>{team ? team.team_name : ""}</NavLink>
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
