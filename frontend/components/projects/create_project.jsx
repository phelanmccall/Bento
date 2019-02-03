import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, withRouter, } from 'react-router-dom';
import merge from 'lodash/merge';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newProjTitle:  '',
      creator_id:    this.props.currentUser.id,
      team_id:       parseInt(this.props.match.params.teamId),
    };

    this.handleSubmit  =  this.handleSubmit.bind(this);
    this.paintTitle    =  this.paintTitle.bind(this);
  }

  paintTitle(e) {
    e.preventDefault();
    const newProjTitle = e.target.value ? e.target.value : '';

    this.setState({ newProjTitle });
  }


  handleSubmit(e) {
    e.preventDefault();
    const newProject = {
      team_id:     parseInt(this.props.match.params.teamId),
      creator_id:  this.props.currentUser.id,
      title:       this.state.newProjTitle,
      index:       (this.props.projects.count + 1) || 0,
    };

    // this.props.createProjo(this.props.projects, newProject);
    this.props.createProject(newProject).then(
      () => this.setState({ newProjTitle: '' })
    )
  }

  render () {

    return (
      <section className='create-container'>
        <form
          className='new-form'
          onSubmit={ this.handleSubmit }
        >
          <input
            className    =  'create-project-input'
            placeholder  =  '+ create new project'
            type         =  'text'
            value        =  { this.state.newProjTitle }
            onChange     =  { this.paintTitle }
          />
        </form>
      </section>
    );
  }

}

export default withRouter(CreateProject);
