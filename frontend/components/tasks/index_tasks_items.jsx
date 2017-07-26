import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.id;
    this.props.destroyTask(id);
  }

  render () {
    const { task, project_id } = this.props;

    return (
      <li
        className="task-list-item"
        >
        <NavLink to={`/api/tasks/${project_id}`} className="task-title">
          {task.title}
        </NavLink>
        <button>Check-it!</button>
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
