import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, withRouter, } from 'react-router-dom';
import merge from 'lodash/merge';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      creator_id: this.props.currentUser.id,
      team_id: parseInt(this.props.match.params.teamId),
      index: this.props.projectCount,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : '';
    this.setState({ title });
  }


  handleSubmit(e) {
    e.preventDefault();

    console.log("YOOOoooooo");
    console.log("YOOOoooooo");
    console.log(this.props);
    console.log(this.state);
    console.log("YOOOoooooo");
    console.log("YOOOoooooo");

    const newProject = {
      team_id: parseInt(this.props.match.params.teamId),
      creator_id: this.props.currentUser.id,
      title: this.state.title,
      index: this.state.index,
    };

    this.props.createProject(newProject);

    this.setState({
      title: '',
      creator_id: this.props.currentUser.id,
      team_id: this.state.team_id,
      index: this.state.index + 1,
    })

  }

  render () {

    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="create-project-input"
            placeholder="+ create new project"
            type="text"
            value={this.state.title}
            onChange={this.setTitle}
          />
        </form>
      </section>
    );
  }

}

export default withRouter(CreateProject);
