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

  componentWillReceiveProps(nextProps) {
    // console.log(this.props);
    console.error(nextProps);
  }

  render () {
    const { project } = this.props;
    // console.error(project);
    // console.log(project.tasks, "1232358q38513851486PROJECT TASKASKASKSAKAS");
    // console.log("r7a8howefha8etp874tycma7tya837ytcanw3ptyva89w3ytawyb8avtwyb8atybl8tva3ly8bw3taly8b3twvly8btv3l8ybt3vli8tvaw3byivtawavtw3itliytavliytttlyilyitvliailtviltvtalitwbilytva3wilyatvw3biylt3yiltvwa3biylatvw3biylatv3wy");
    return (
      <li className="project-list-item">
        <NavLink to={`/api/projects/${project.id}`} className="project-title">
          {project.title}
        </NavLink>
        <TaskIndex
          tasks={project.tasks}
          projectId={project.id}
          />
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
