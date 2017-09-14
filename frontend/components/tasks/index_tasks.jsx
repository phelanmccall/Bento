import React from 'react';
import { Route } from 'react-router-dom';
import CreateTask from './create_task';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import { deleteTask, updateTask } from '../../actions/task_actions';
import update from 'react/lib/update';

const taskTarget = {
  hover(props, monitor, component) {
    const dragTask = monitor.getItem();

    if (dragTask.project_id !== props.projectId) {
      const task = Object.assign({}, dragTask, { project_id: props.projectId });

      component.setState({ project_id: props.projectId });

      return;
    }
  }
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}



class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    const state = {
      tasks: []
    }
  }

  componentDidMount () {
    this.props.getAllTasksFromProjects(1)
    this.setState(
      { tasks: this.props.tasksState }
    )
  }

  componentWillReceiveProps(nextProps) {
    // console.error(this.state, "this.state.tasks");
    // console.error(nextProps, "nextProps.tasks");
    if (this.state.tasks.length !== nextProps.tasksState.length) {
      this.setState(
        { tasks: nextProps.tasksState }
      )
    }
  }

  makeTaskArray(tasks) {
    return Object.keys(tasks).map(function (key) { return tasks[key]; });
  }

  filterTasksByProject(tasks, projectId) {
    let arr = this.makeTaskArray(tasks)
    let new_arr = []
    arr.filter(task => {
      if (task.project_id === projectId) {
        new_arr.push(task)
      }
    });
    return new_arr
  }

  render () {
    const { projectId, updateTask, connectDropTarget } = this.props;
    const tasks = this.state ? this.props.tasksState : []
    let taskList = this.makeTaskArray(tasks)

    if (this.state) {
    return connectDropTarget(
      <div className="task-index-wrapper">

        <section className="indices-section">
          <ul className="task-index">
            { taskList && taskList.map((task, indexOfTask) =>
              {
                return <TaskIndexItemsContainer
                  className="task-index-item"
                  key={ task.id }
                  task={ task }
                  index={ indexOfTask }
                  tasks={ taskList }
                />
              }
            )}

            <div
              className="create-task-wrapper">
              <CreateTaskContainer
                projectId={ this.props.projectId }
              />
            </div>
          </ul>
        </section>
      </div>
    )} else {
      return null
    }
  }
}

export default DropTarget(
  ItemTypes.TASK,
  taskTarget,
  collectTarget
)(TaskIndex);
