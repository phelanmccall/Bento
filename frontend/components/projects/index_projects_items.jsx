import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import ProjectShowContainer from './show_project_container';
import CreateTaskContainer from '../tasks/create_task_container';
import TaskIndexContainer from '../tasks/index_tasks_container';
import updateProject from '../../actions/project_actions';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

const specSource = {
  beginDrag(props) {
    // console.log("BEGIN", props.index);
    return {
      id: props.project.id,
      index : props.project.index,
    };
  },
  isDragging(props, monitor) {
    return props.project.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    // console.log("MONITOR END", monitor.getItem().index);
    // console.log("END", props.index);
    // const proj = Object.assign({}, monitor.getItem(), { index: monitor.getItem().index });
    // props.updateProject(proj);
    // component.forceUpdate();
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

const specTarget = {
  hover(props, monitor, component) {
    const dragIdx = monitor.getItem().index;
    const hoverIdx = props.index;

    if (dragIdx === hoverIdx) {
      return;
    } else {

    const proj = Object.assign({}, monitor.getItem(), { index: props.index });
    props.updateProject(proj);

    monitor.getItem().index = props.index;
    // props.index = dragIdx;
    component.forceUpdate();
    }
  }
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

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
      tasks: this.props.project.tasks,
      id: this.props.project.id,
      index: this.props.index,
    }

  }

  handleDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.id;
    this.props.destroyProject(id);
  }

  handleInput(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : ""
    // let id = e.currentTarget.id;
    this.setState({title})
  }

  handleUpdateProject (e) {
    const obj = {
      title: this.state.title,
      creator_id: this.state.creator_id,
      id: this.state.id,
    };

    this.props.updateProject(obj);
  }

  handleEnter (e) {
    if (e.key === 'Enter') {
      const obj = {
        title: this.state.title,
        creator_id: this.state.creator_id,
        id: this.state.id,
      };

      this.props.updateProject(obj);
    }
  }



  render () {
    const { project, connectDragSource, connectDropTarget, isDragging, index } = this.props;

    const opacity = isDragging ? 0.3 : 1;

    return connectDropTarget(connectDragSource(
      <li style={{ opacity }} className="project-list-item">

        <input
          className="project-title-live-input"
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
          onBlur={this.handleInput}
          onFocus={this.handleInput}
          onKeyPress={this.handleEnter}
        />

      <TaskIndexContainer
          className="pli-task-index-wrapper"
          tasks={project.tasks}
          projectId={project.id}
          />
      </li>
    ));
  }
}

export default DropTarget(
  ItemTypes.PROJECT,
  specTarget,
  collectTarget
)(DragSource(
  ItemTypes.PROJECT,
  specSource,
  collectSource
)(ProjectIndexItem));

// { tasks &&  tasks.map(task =>
//   <TaskIndexItem className="task-index-item" key={ task.id }
//     task={ task }
//   />
// )}


// <Link to={`/api/projects/${project.id}/edit`} className="edit-link">Edit</Link>
// <button id={project.id} onClick={ this.handleDelete } className="delete">Delete</button>

// <NavLink to={`/api/projects/${project.id}`} className="project-title">
//   {project.title}
// </NavLink>
