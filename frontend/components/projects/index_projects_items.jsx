import React from 'react';
import {
  Route,
  NavLink,
  Link,
} from 'react-router-dom';

import CreateTaskContainer from '../tasks/create_task_container';

import TaskIndexContainer from '../tasks/index_tasks_container';

import {
  updateProject,
  destroyProject,
} from '../../actions/project_actions';


class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleUpdateProject = this.handleUpdateProject.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      title: this.props.project.title,
      creator_id: this.props.project.creator_id,
      manager: this.props.project.manager,
      id: this.props.project.id,
      index: this.props.index,
    };
  }

  handleDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.id;

    this.props.destroyProject(id);
  }

  handleInput(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : '';
    this.setState({title});
  }

  handleUpdateProject (e) {
    const obj = {
      title: this.state.title,
      creator_id: this.state.creator_id,
      id: this.state.id,
    };

    this.props.updateProject(obj);
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      const obj = {
        title: this.state.title,
        creator_id: this.state.creator_id,
        id: this.state.id,
      };

      this.props.updateProject(obj);
    }
  }

  render() {

    const { state, project, index } = this.props;
    const idOfProject = project.id;
    const opacity = 1;

    return (
      <li
        style={{ opacity }}
        className="project-list-item"
      >
        <input
          className="project-title-live-input"
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
          onBlur={this.handleInput}
          onFocus={this.handleInput}
          onKeyPress={this.handleEnter}
        />
        <button
          id={project.id}
          onClick={this.handleDelete}
          className="task-delete"
        >x</button>

        <TaskIndexContainer
          className="pli-task-index-wrapper"
          tasks={this.props.tasks}
          projectId={idOfProject}
        />
      </li>
    );
  }
}

export default (ProjectIndexItem);
