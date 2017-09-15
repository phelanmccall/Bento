import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { RECEIVE_TASK, REMOVE_TASK, updateTask, deleteTask } from '../../actions/task_actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import update from 'react/lib/update';
import { connect } from 'react-redux';

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

  componentWillUpdate () {
    console.log("__titem, WILL UPDATE");
  }

  componentDidUpdate () {
    console.log("__titem, DID UPDATE");
  }

  componentWillReceiveProps(nextProps) {
    console.log("__titem, WILL RECEIVE PROPS");
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

    const { task, project_id, deleteTask } = this.props;


    const opacity = 1;
    return (
      <li
        className={ `${this.state.checked ? "task-item-true" : "task-item-false"}`}
        style={{ opacity }}
        >

        <div className="little-check-box"

          className={ `${this.state.checked ? "check-true" : "check-false"}` }
          onClick={ this.handleCheck }
        ><div className="hover-check">✔️</div></div>
      <div className="task-title">{ task.title }</div>
      <button id={task.id} onClick={ this.handleDelete } className="task-delete">x</button>

      </li>
    );
  }
}

export default (TaskIndexItem);
