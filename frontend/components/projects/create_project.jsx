import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter, history, Link } from 'react-router-dom';
import merge from 'lodash/merge';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      title: "",
      creator_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let emptyState = {};
    const newProject = merge(emptyState, this.state);
    this.props.createProject(newProject).then(
      () => this.setState({
        title: "",
        creator_id: this.props.currentUser.id
      })
    ).then((project) =>
      this.props.history.push('/api/projects')
    );

  }

  render () {
    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={ this.handleSubmit }
        >
          <h3>Create Project</h3>
          Title: <input
            type="text"
            value={ this.state.title }
            onChange={ this.update('title') }
          />
          <button>
            Bento
          </button>
        </form>
      </section>
    );
  }

}


export default CreateProject;
