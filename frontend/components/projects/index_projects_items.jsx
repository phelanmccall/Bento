import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import CreateTaskContainer from '../tasks/create_task_container';
import TaskIndexContainer from '../tasks/index_tasks_container';
import { updateProject, destroyProject } from '../../actions/project_actions';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

const specSource = {
  beginDrag(props) {
    return {
      id: props.project.id,
      index : props.index,
    };
  },
  isDragging(props, monitor) {
    return props.project.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
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

    const { state, project, connectDragSource, connectDropTarget, isDragging, index } = this.props;
    const idOfProject = project.id;

    const opacity = isDragging ? 0 : 1;
    const cursor = isDragging ? "-webkit-grabbing" : "-webkit-grab";


    return connectDropTarget(connectDragSource(
      <li  style={{ opacity }} className={`project-list-item ${isDragging ? "grabbing" : "not-grabbing"}`}>

        <input
          className="project-title-live-input"
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
          onBlur={this.handleInput}
          onFocus={this.handleInput}
          onKeyPress={this.handleEnter}
        />
      <button id={project.id} onClick={ this.handleDelete } className="task-delete">x</button>


      <TaskIndexContainer

          className="pli-task-index-wrapper"
          tasks={ this.state.tasks }
          projectId={ idOfProject }
          help={"This is here!"}
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
