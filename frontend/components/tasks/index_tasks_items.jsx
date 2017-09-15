import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { RECEIVE_TASK, REMOVE_TASK, updateTask, deleteTask } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import update from 'react/lib/update';
import { connect } from 'react-redux';

const taskSource = {
  beginDrag(props, monitor, component) {
    let taskSave = props.task
    let id = props.id;
    let projId = props.project_id;
    let theTasks = props.state.projects[projId].tasks;
    return {
      state: props.state,
      id: props.task.id,
      project_id: props.task.project_id,
      index: props.task.index,
    };
  },

  isDragging(props, monitor) {
    return props.task.id === monitor.getItem().id;
  },

  endDrag(props, monitor) {
    if (monitor.didDrop()) {
    }
    if (!monitor.didDrop()) {
      return;
    } else {
      const dragTask = monitor.getItem();
      const dropResult = monitor.getDropResult();
      const task = Object.assign({}, dragTask, { project_id: props.projectId });
      props.updateTask(task);
    }
  },

};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

const taskTarget = {
  hover(props, monitor, component) {
    const dragIdx = monitor.getItem().index;
    const hoverIdx = props.task.index;

    if (dragIdx === hoverIdx) {
      return;
    } else {
      const tasky = Object.assign({}, monitor.getItem(), { index: props.task.index });
      props.updateTask(tasky);

      monitor.getItem().index = props.task.index;
      component.forceUpdate();
    }
  },
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    highlighted: monitor.canDrop(),
    hovered: monitor.isOver(),
  };
};

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      id: this.props.task.id,
      title: this.props.task.title,
      project_id: this.props.task.project_id,
      checked: this.props.task.checked,
      index : this.props.index,
      details: this.props.task.details,
    }
  }

  componentWillReceiveProps() {
    this.render();
  }

  componentDidUpdate() {
    this.render();
  }

  componentDidMount() {
    this.elRef.addEventListener('mouseup', () => {
      this.forceUpdate();
    });
  }

  handleDelete(e) {
    e.preventDefault();

    let id = e.currentTarget.id;
    let projId = this.state.project_id;
    let theTasks = this.props.state.projects[projId].tasks;
    this.props.dispatch(deleteTask(theTasks[this.state.id].id))
    console.log(this.state, "this.state");
    console.log(this.props.tasks, "this.props.tasks");
    console.log(id, "id");
    this.props.dispatch(deleteTask(this.state.id))
  }

  handleCheck(e) {
    e.preventDefault();

    setTimeout(() => this.setState({ checked: !this.state.checked }), 0);

    let obj = {
      title: this.state.title,
      project_id: this.state.project_id,
      checked: !this.state.checked,
      details: this.state.details,
      id: this.state.id,
      index : this.state.index,
    };

    this.props.updateTask(obj);
  }

  handleInput(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : ""
    this.setState({title})
  }

  handleUpdateTask (e) {
    const obj = {
      title: this.state.title,
      project_id: this.state.project_id,
      checked: this.state.checked,
      details: this.state.details,
      id: this.state.id,
      index : this.state.index,
    };

    this.props.updateTask(obj);
  }

  handleEnter (e) {
    if (e.key == 'Enter') {
      const obj = {
        title: this.state.title,
        project_id: this.state.project_id,
        checked: this.state.checked,
        details: this.state.details,
        id: this.state.id,
        index : this.state.index,
      };

      this.props.updateTask(obj);
    }
  }

  render () {

    const { task, project_id, highlighted, hovered, connectDragSource, connectDropTarget, isDragging, deleteTask } = this.props;


    const opacity = isDragging ? 0 : 1;
    return connectDropTarget(connectDragSource(
      <li
        ref={element => this.elRef = element}
        className={ `${this.state.checked ? "task-item-true" : "task-item-false"}`}
        style={{ opacity }}
        >

        <div className="little-check-box"

          className={ `${this.state.checked ? "check-true" : "check-false"}` }
          onClick={ this.handleCheck }
        ><div className="hover-check">✔️</div></div>
      <div className="task-title" ref={element => this.elRef = element}

        >{ task.title }</div>
      <button id={task.id} onClick={ this.handleDelete } className="task-delete">x</button>

      </li>
    ));
  }
}

export default DropTarget(
  ItemTypes.TASK,
  taskTarget,
  collectTarget
)(DragSource(
  ItemTypes.TASK,
  taskSource,
  collectSource
)(connect()(TaskIndexItem)));
