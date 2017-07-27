import React from 'react';

class TeamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner_id: this.props.owner_id,
      team_name: "",
    }

    this.setTeamName = this.setTeamName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setTeamName(e) {
    e.preventDefault();
    const team_name = e.target.value ? e.target.value : "";
    this.setState({ team_name });
  }

  handleSubmit (e) {
    e.preventDefault();

    let emptyState = {};
    const newTeam = this.state;

    this.props.createTeam(newTeam);
  }

  render() {

    return (
      <div className="create-team-wrapper">
        <div className="team-form-wrapper">
          <form className="team-form">
            onSubmit={ handleSubmit }

              Team name:<input
                className="team-name-input"
                type="text"
                value={ this.state.team_name }
                onChange={this.setTeamName}
              />
            <br />
            <button>
              Submit
            </button>



          </form>
        </div>
      </div>
    )



  }
}



export default TeamForm;
