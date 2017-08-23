import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';
import { RECEIVE_TASK } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

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

    setTimeout(() => this.setState({ checked: !this.state.checked }), 0);

    let obj = {
      title: this.state.title,
      project_id: this.state.project_id,
      checked: !this.state.checked,
      details: this.state.details,
      id: this.state.id
    };



    this.props.updateTask(obj);
  }

  render () {

    const { task, project_id } = this.props;
    const background = {
          	backgroundColor: `#${'0123456789abcdef'.split('').map(function(v,i,a) { return i > 5 ? null : a[Math.floor(Math.random() * 16)] }).join('')}`,
            width: `3px`,
            height: `35px !important`,
            marginLeft: `-2px`,
            marginRight: `20px`,
          };


    return (
      <li
        className={`${this.state.checked ? "task-item-true" : "task-item-false"}`}
        onClick={this.handleCheck}
        >

        <div className="little-check-box" style={background}></div>
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

// <div className="check-box-wrapper">
//   <input
//     className="check-box"
//     type="checkbox"
//     checked={this.state.checked}
//     onClick={this.handleCheck}
//     />
// </div>
