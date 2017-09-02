import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';
import { RECEIVE_TASK } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

const taskSource = {
  beginDrag(props) {
    // props.task.style.opacity = 0;
    return {
      id: props.task.id,
      project_id: props.task.project_id,
    };
  },
  isDragging(props, monitor) {
    return props.task.id === monitor.getItem().id;
  },
  endDrag(props, monitor) {
    const { id: droppedId } = monitor.getItem();
    const didDrop = monitor.didDrop();
    const task = Object.assign({project_id: props.task.project_id}, monitor.getItem());

    if (didDrop) {
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
    const dragTask = monitor.getItem();
    const hoverTask = props.task;

    if (dragTask.project_id !== hoverTask.project_id) {
      const task = Object.assign({}, hoverTask)
      // const project = Object.assign({}, monitor.getItem())
      props.updateTask(task);
      // props.updateProject(project);

      monitor.getItem().id = hoverTask.id;
    }
  }
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
};

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    console.log(this.props);

    this.state = {
      checked: this.props.task.checked,
      details: this.props.task.details,
      title: this.props.task.title,
      project_id: this.props.task.project_id,
      id: this.props.task.id,
      index : this.props.index,
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
      id: this.state.id,
      index : this.state.index,
    };

    this.props.updateTask(obj);
  }

  handleInput(e) {
    e.preventDefault();
    const title = e.target.value ? e.target.value : ""
    // let id = e.currentTarget.id;
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

    const { task, project_id, connectDragSource, connectDropTarget, isDragging } = this.props;

    // const { task, project_id } = this.props;
    let background = {
          	backgroundColor: `black`,
            width: `3px`,
            minWidth: `3px`,
            height: `35px !important`,
            marginLeft: `-3px`,
            marginRight: `20px`,
          };



    const opacity = isDragging ? 0 : 1;

    return connectDropTarget(connectDragSource(
      <li
        className="task-item-false"
        style={{opacity}}
        >

        <div className="little-check-box"
          style={isDragging ? { backgroundColor: `black` } : background}
          className={`${this.state.checked ? "task-item-true" : "task-item-false"}`}
          onClick={this.handleCheck}
        ></div>
      <div className="task-title"

        >{task.title}</div>


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

// <div className="task-title">{task.title}</div>


// $(document)
//   .one('focus.autoExpand', 'textarea.autoExpand', function(){
//       var savedValue = this.value;
//       this.value = '';
//       this.baseScrollHeight = this.scrollHeight;
//       this.value = savedValue;
//   })
//   .on('input.autoExpand', 'textarea.autoExpand', function(){
//       var minRows = this.getAttribute('data-min-rows')|0, rows;
//       this.rows = minRows;
//       rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
//       this.rows = minRows + rows;
//   });


// <textarea
//     rows='3' data-min-rows='3'
//     className="autoExpand"
//     type="text"
//     value={this.state.title}
//     onChange={this.handleInput}
//     onBlur={this.handleInput}
//     onFocus={this.handleInput}
//     onKeyPress={this.handleEnter}
//   />

// #${'0123456789abcdef'.split('').map(function(v,i,a) { return i > 5 ? null : a[Math.floor(Math.random() * 16)] }).join('')}
