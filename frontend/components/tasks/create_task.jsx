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
      index: this.props.index,
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
    this.props.createTask(newTask);

    this.setState({
      title: "",
      details: ""
    });

    // this.props.history.push(`/api/tasks`);
  }

  render () {


    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={ this.handleSubmit }
        >
          <div
          className="create-task-title-input-wrapper">
            <input
              className="create-task-input"
              type="text"
              placeholder="+ create new task"
              value={ this.state.title }
              onChange={ this.update('title') }
            />
        </div>
        <br />


          <button className="create-task-button">
            create task
          </button>
        </form>
      </section>
    );
  }

}


export default withRouter(CreateTask);

// <div
  // className="create-task-details-input-wrapper">
  //   Details: <input
  //     type="text"
  //     value={ this.state.details }
  //     onChange={ this.update('details') }
  // />
// </div>
