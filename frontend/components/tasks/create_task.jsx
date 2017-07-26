import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      details: "",
      project_id: this.props.projectId,
      checked: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let emptyState = {};
    const newTask = this.state;
    this.props.createTask(newTask).then(() => {
      this.setState({ title: "", details: "" })
    });
    this.props.history.push(`/api/tasks`);

  }

  render () {


    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={ this.handleSubmit }
        >
          <h3>Create Task</h3>
          <div
          className="create-task-title-input-wrapper">
            Title: <input
              type="text"
              value={ this.state.title }
              onChange={ this.update('title') }
            />
        </div>
        <br />
          <div
          className="create-task-details-input-wrapper">
            Details: <input
              type="text"
              value={ this.state.details }
              onChange={ this.update('details') }
          />
        </div>

          <button>
            Bento
          </button>
        </form>
      </section>
    );
  }

}


export default withRouter(CreateTask);
