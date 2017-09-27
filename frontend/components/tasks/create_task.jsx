import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'lodash/merge';
import {
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      details: '',
      project_id: this.props.projectId,
      checked: false,
      index: this.props.index,
      team_id: null,
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

    const newTask = {
      title: this.state.title,
      project_id: this.state.project_id,
      checked: this.state.checked,
      index : this.state.index,
      details: this.state.details,
      team_id: parseInt(this.props.match.params.teamId),
    };

    this.props.createTask(newTask);

    this.setState({
      title: '',
      checked: false,
      index: this.props.index,
      details: '',
    });
  }

  render() {

    return (
      <section className="create-container">
        <form
          className="new-form"
          onSubmit={this.handleSubmit}
        >
          <div className="create-task-title-input-wrapper">
            <input
              className="create-task-input"
              type="text"
              placeholder="+ create new task"
              value={this.state.title}
              onChange={this.setTitle}
            />
          </div>

          <br />

        </form>
      </section>
    );
  }
}

export default withRouter(CreateTask);
