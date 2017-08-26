import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';
import { RECEIVE_TASK } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleUpdateProject = this.handleUpdateProject.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      checked: this.props.task.checked,
      details: this.props.task.details,
      title: this.props.task.title,
      project_id: this.props.task.project_id,
      id: this.props.task.id,
    }

  }

  const taskSource = {
    beginDrag(props) {
      return {
        id: this.props.task.id,
        project_id: this.props.task.project_id,
      };
    },
    isDragging(props, monitor) {
      return props.task.id === monitor.getItem().id;
    }
  };

  collectSource(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    };
  };

  collectTarget(connect, monitor) {
    return {
      connectDropTarget: connect.DropTarget(),
    };
  };

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
      id: this.state.id
    };



    this.props.updateTask(obj);
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
      project_id: this.state.project_id,
      checked: this.state.checked,
      details: this.state.details,
      id: this.state.id
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
        id: this.state.id
      };

      this.props.updateTask(obj);
    }
  }

  render () {

    const { task, project_id } = this.props;
    const background = {
          	backgroundColor: `#${'0123456789abcdef'.split('').map(function(v,i,a) { return i > 5 ? null : a[Math.floor(Math.random() * 16)] }).join('')}`,
            width: `3px`,
            minWidth: `3px`,
            height: `35px !important`,
            marginLeft: `-3px`,
            marginRight: `20px`,
          };


    return (
      <li
        className="task-item-false"
        >

        <div className="little-check-box"
          style={background}
          className={`${this.state.checked ? "task-item-true" : "task-item-false"}`}
          onClick={this.handleCheck}
        ></div>
      <div className="task-title"

        >{task.title}</div>


      </li>
    );
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
