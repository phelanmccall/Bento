import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';
import { RECEIVE_TASK } from '../../actions/task_actions';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      checked: this.props.task.checked,
      details: this.props.task.details,
      title: this.props.task.title,
      project_id: this.props.task.project_id,
      id: this.props.task.id,
    }
  }

  // handleDelete(e) {
  //   e.preventDefault();
  //   let id = e.currentTarget.id;
  //   this.props.destroyTask(id);
  // }

  handleCheck(e) {
    e.preventDefault();
    console.log(e.target.value);
    setTimeout(() => this.setState({ checked: !this.state.checked }), 0);

    let obj = {
      title: this.state.title,
      project_id: this.state.project_id,
      checked: !this.state.checked,
      details: this.state.details,
      id: this.state.id
    };

    console.log(this.props);

    this.props.updateTask(obj);
  }

  render () {
    console.log("arrr i be the props in the render function", this.props);
    const { task, project_id } = this.props;
    console.log("project id", project_id);
    console.log("task", task);
    return (
      <li
        className={`${this.state.checked ? "task-item-true" : "task-item-false"}`}
        onClick={this.handleCheck}
        >
        <div className="check-box-wrapper">
          <input
            className="check-box"
            type="checkbox"
            checked={this.state.checked}
            onClick={this.handleCheck}
            />
        </div>
        <div className="task-title">{task.title}</div>
      </li>
    );
  }
}

export default TaskIndexItem;

// { tasks &&  tasks.map(task =>
//   <TaskIndexItem className="task-index-item" key={ task.id }
//     task={ task }
//   />
// )}


// <Link to={`/api/tasks/${task.id}/edit`} className="edit-link">Edit</Link>
// <button id={task.id} onClick={ this.handleDelete } className="delete">Delete</button>
