import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import ProjectShowContainer from './show_project_container';
import CreateTaskContainer from '../tasks/create_task_container';
import TaskIndex from '../tasks/index_tasks';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.id;
    this.props.destroyProject(id);
  }

  render () {
    const { project } = this.props;
    return (
      <li className="project-list-item">
        <NavLink to={`/api/projects/${project.id}`} className="project-title">
          {project.title}
        </NavLink>
        <TaskIndex />
      </li>
    );
  }
}

export default ProjectIndexItem;

// { tasks &&  tasks.map(task =>
//   <TaskIndexItem className="task-index-item" key={ task.id }
//     task={ task }
//   />
// )}


// <Link to={`/api/projects/${project.id}/edit`} className="edit-link">Edit</Link>
// <button id={project.id} onClick={ this.handleDelete } className="delete">Delete</button>
