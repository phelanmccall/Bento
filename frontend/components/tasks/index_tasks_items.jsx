import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import TaskShowContainer from './show_task_container';
import { RECEIVE_TASK, REMOVE_TASK, updateTask, deleteTask } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import update from 'react/lib/update';

const taskSource = {
  beginDrag(props, monitor, component) {
    console.log("The Task that is being DRAGGED", props.task.index);
    component.forceUpdate();
    return {
      id: props.task.id,
      project_id: props.task.project_id,
      index: props.task.index,
    };
  },

  isDragging(props, monitor) {
    return props.task.id === monitor.getItem().id;
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    } else {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      // TaskActions.moveTaskToProject(item.id, dropResult.listId);
    }
    // const { id: droppedId } = monitor.getItem();
    // const didDrop = monitor.didDrop();
    // const task = Object.assign({project_id: props.task.project_id}, monitor.getItem());

    // if (didDrop) {
    //   props.updateTask(task);
      // props.updateProject(task.project_id);
    // }
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
      // console.log("THE TASK THAT'S HOVERING", props.task.index);
      const tasky = Object.assign({}, monitor.getItem(), { index: props.task.index });
      props.updateTask(tasky);
      // console.log("TASKY TASKY", tasky);

      monitor.getItem().index = props.task.index;
      // props.index = dragIdx;
      component.forceUpdate();
    }
    // monitor.getItem().index = props.index;
  },
  // drop(props, monitor, component) {
      // component.setState({ project_id: props.projectId });
      // component.forceUpdate();
      // return props;
  // },
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

    // console.log(this.props);

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

  handleDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.id;
    this.setState({id: this.props.task.id});
    this.props.deleteTask(this.props.task.id);
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

  moveTask(id, atIndex) {
    const { task, index } = this.findTask(id);
    this.setState(update(this.state, {
      tasks: {
        $splice: [
          [index, 1],
          [atIndex, 0, task],
        ],
      },
    }));
  }

  findTask(id) {
    const { tasks } = this.state;
    const task = tasks.filter(c => c.id === id)[0];

    return {
      task,
      index: tasks.indexOf(task),
    };
  }

  render () {

    const { task, project_id, highlighted, hovered, connectDragSource, connectDropTarget, isDragging, deleteTask } = this.props;

    let background = {
          	backgroundColor: `#f3feb7`,
            width: `30px`,
            minWidth: `3px`,
            height: `35px !important`,
            marginLeft: `-3px`,
            marginRight: `20px`,
          };

    const opacity = isDragging ? 0 : 1;
    // console.log(task, "TASK FROM TASK RENDER");
    return connectDropTarget(connectDragSource(
      <li
        className="task-item-false"
        style={{ opacity }}
        >

        <div className="little-check-box"
          style={ isDragging ? { backgroundColor: `black` } : background }
          className={ `${this.state.checked ? "task-item-true" : "task-item-false"}` }
          onClick={ this.handleCheck }
        ></div>
      <div className="task-title"

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
)(TaskIndexItem));

// { tasks &&  tasks.map(task =>
//   <TaskIndexItem className="task-index-item" key={ task.id }
//     task={ task }
//   />
// )}


// <Link to={`/api/tasks/${task.id}/edit`} className="edit-link">Edit</Link>
//

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


// component.forceUpdate();
// if (dragTask.project_id !== hoverTask.project_id) {
  // const task = Object.assign({}, hoverTask)
  // const project = Object.assign({}, monitor.getItem())
  // props.updateTask(task);
  // props.updateProject(project);

  // monitor.getItem().id = hoverTask.id;
// }
// || dragTask.id !== hoverTask.id
