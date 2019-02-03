import React from 'react';
import { ItemTypes } from '../../util/dnd_constants.js';
import { Route, NavLink, Link } from 'react-router-dom';
import { updateTask, deleteTask } from '../../actions/task_actions';
import { DragSource, DropTarget, DragLayer } from 'react-dnd';

const taskSource = {
  beginDrag(props, monitor, component) {
    return {
      id:          props.task.id,
      project_id:  props.task.project_id,
      index:       props.task.index,
    };
  },

  isDragging(props, monitor) {
    return props.task.id === monitor.getItem().id;
  },
};

function collectSource(connect, monitor) {
  return {
    connectDragSource:  connect.dragSource(),
    isDragging:         monitor.isDragging(),
  };
};

const taskTarget = {
  hover(props, monitor, component) {

    const dragTask  =  monitor.getItem();
    const dragId    =  monitor.getItem().id;
    const hoverId   =  props.task.id;


    /**
     * props.tasks is an array of all tasks of the project of the task
     * being hovered.
     * We need a slicey method to basically
     * filter out the task from hovered id from the hovered array, and slot in
     * the task from the XXX Drag id XXX, slicing it out of it's own
     * monitor.getitem.projectid array if the
     * hover proj id (from props) is NOT EQUAL to the monitor proj id
     * (from getItem)
     */

    /*
     *  FIXME also, remember, we have to keep it stateful! So will have to
     * update the positioning from the array indices.
     */

  },
  drop(props, _monitor, _component) {
    return props;
  },
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget:  connect.dropTarget(),
    highlighted:        monitor.canDrop(),
    hovered:            monitor.isOver(),
  };
};

// TaskIndexItem Class_____________________________________________________ NB :

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete      =  this.handleDelete.bind(this);
    this.handleCheck       =  this.handleCheck.bind(this);
    // this.handleInput       =  this.handleInput.bind(this);
    // this.handleUpdateTask  =  this.handleUpdateTask.bind(this);
    // this.handleEnter       =  this.handleEnter.bind(this);
    this.state = { ...this.props };
    // console.log(this.state);
  }

  componentDidMount() {
    // let dupeLength = []
    // let filtered = this.props.tasks.filter((task) => {
    //   console.log('%ctaskid, stateid', 'color: yellow; background-color:black;', task.id, this.state.id);
    //   if (task.id === this.state.id) dupeLength.push(task);
    //
    // });
    // console.log('%cfilter length', 'color: pink; background-color:black;', filtered.length, dupeLength.length);
    //
    // if (dupeLength.length !== 0) {
    //   this.props.updateTask(this.state);
    //   this.props.delete(this.state);
    // }
  }

  handleDelete(e) {
    e.preventDefault();

    let id = e.currentTarget.id;

    this.props.deleteTask(id)
  }

  handleCheck(e) {
    e.preventDefault();


    let obj = {
      title:       this.props.title,
      project_id:  this.props.project_id,
      checked:     !(this.props.checked),
      details:     this.props.details,
      id:          this.props.id,
      index:       this.props.index,
      team_id:     this.props.team_id,
    };

    this.props.updateTask(obj);
  }

  // handleInput(e) {
  //   e.preventDefault();
  //   const title = e.target.value ? e.target.value : '';
  //   this.setState({ title });
  // }

  // handleUpdateTask (e) {
  //   const obj = {
  //     title:       this.props.task.title,
  //     project_id:  this.props.task.project_id,
  //     checked:     this.props.task.checked,
  //     details:     this.props.task.details,
  //     id:          this.props.task.id,
  //     index:       this.props.task.index,
  //     team_id:     this.props.task.team_id,
  //   };
  //
  //   this.props.updateTask(obj);
  // }

  // handleEnter (e) {
  //   if (e.key == 'Enter') {
  //     const obj = {
  //       title:       this.props.task.title,
  //       project_id:  this.props.task.project_id,
  //       checked:     this.props.task.checked,
  //       details:     this.props.task.details,
  //       id:          this.props.task.id,
  //       index:       this.props.task.index,
  //       team_id:     null,
  //     };
  //
  //     this.props.updateTask(obj);
  //   }
  // }

// TaskIndexItem render__________________________________________________ TODO :

  render () {
    const {
      task,
      project_id,
      hovered,
      connectDragSource,
      connectDropTarget,
      isDragging,
    } = this.props;

    const opacity  =  isDragging ? 0 : 1;
    const cursor   =  isDragging ? '-webkit-grabbing !important' : '-webkit-grab !important';

    return connectDropTarget(connectDragSource(
      <li
        className  =  { `task-item-${task.checked ? true : false}` }
        style      =  { { opacity } }
      >
        <div
          id        = { `check-${task.id}` }
          className = { `check-${task.checked ? true : false}` }
          onClick   = { this.handleCheck }
        >
          <div className='hover-check'>✔️</div>
        </div>
        <div className='task-title'>{ task.title }</div>
        <button
          id        =  { task.id }
          onClick   =  { this.handleDelete }
          className =  'task-delete'
        >x</button>

      </li>
    ));
  }
}

export default DropTarget(
  ItemTypes.TASK,
  taskTarget,
  collectTarget,
)(DragSource(
  ItemTypes.TASK,
  taskSource,
  collectSource,
)(TaskIndexItem));
