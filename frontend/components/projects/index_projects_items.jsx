import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import ProjectShowContainer from './show_project_container';

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
      <li className="project-list">
        <NavLink to={`/api/projects/${project.id}`} className="project-title">
          {project.title}
        </NavLink>
        <Link to={`/api/projects/${project.id}/edit`} className="edit-link">Edit</Link>
        <button id={project.id} onClick={ this.handleDelete } className="delete">Delete</button>
      </li>
    );
  }
}

export default ProjectIndexItem;
