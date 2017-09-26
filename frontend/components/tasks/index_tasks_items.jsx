import React from 'react';
import {
  Route,
  NavLink,
  Link,
} from 'react-router-dom';

import {
  updateTask,
  deleteTask,
} from '../../actions/task_actions';

import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from "../../util/dnd_constants.js";
import {
  DragDropContext,
  DragSource,
  DropTarget,
  DragLayer,
} from 'react-dnd';



const taskSource = {
  beginDrag(props, monitor, component) {
    console.log(props, 'p', component, 'c');
    return {
      id: props.task.id,
      project_id: props.task.project_id,
      index: props.task.index,
    };
  },

  isDragging(props, monitor) {
    return props.task.id === monitor.getItem().id;
  },

  // endDrag(props, monitor) {
  //   if (!monitor.didDrop()) {
  //     return;
  //   } else {
  //     const item = monitor.getItem();
  //     const dropResult = monitor.getDropResult();

  //   }
    // const { id: droppedId } = monitor.getItem();
    // const didDrop = monitor.didDrop();
    // const task = Object.assign({project_id: props.task.project_id}, monitor.getItem());

    // if (didDrop) {
    //   props.updateTask(task);
      // props.updateProject(task.project_id);
    // }
  // },

};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

const taskTarget = {
  hover(props, monitor, component) {
    // console.log(monitor.getItem().id, 'mgi');
    console.log(props.task.id, 'hover id');
    console.log(props.tasks, 'props tasks');
    const dragId = monitor.getItem().id;
    const hoverId = props.task.id;

    /*
      TODO So we have props.tasks which is the array of all tasks of the project of the task being hovered.
      TODO We need a slicey method to basically filter out the task from hovered id from the hovered array,
      TODO and slot in the task from the XXX Drag id XXX, slicing it out of it's own monitor.getitem.projectid
      TODO array if the hover proj id (from props) isn't equal to the monitor proj id (from getItem)
    */

    // TOTALLY DOABLE! FIXME

    // if (dragIdx === hoverIdx) {
    //   return;
    // } else {
    //   const tasky = Object
    //     .assign({}, monitor.getItem(), { index: props.task.index });
    //   props.updateTask(tasky);
    //
    //   monitor.getItem().index = props.task.index;
    //   component.forceUpdate();
    // }
  },
  // drop(props, monitor, component) {
      // return props;
  // },
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    // highlighted: monitor.canDrop(),
    hovered: monitor.isOver(),
  };
};

// TaskIndexItem Class_____________________________________________________ NB :

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
      team_id: null,
    }
  }

  handleDelete(e) {
    e.preventDefault();

    let id = e.currentTarget.id;

    this.props.deleteTask(id)
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
      team_id: null,
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
      team_id: null,
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
        team_id: null,
      };

      this.props.updateTask(obj);
    }
  }

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

    const opacity = 1;

    return connectDropTarget(connectDragSource(
      <li
        className={`${this.state.checked ? 'task-item-true' : 'task-item-false'}`}
        style={{ opacity }}
      >

        <div
          className="little-check-box"
          className={`${this.state.checked ? 'check-true' : 'check-false'}`}
          onClick={this.handleCheck}
        >
          <div className="hover-check">✔️</div>
        </div>

        <div className="task-title">{ task.title }</div>

        <button
          id={task.id}
          onClick={this.handleDelete}
          className="task-delete"
        >x</button>

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
)(TaskIndexItem));
