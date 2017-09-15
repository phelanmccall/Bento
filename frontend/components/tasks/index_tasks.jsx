import React from 'react';
import { Route } from 'react-router-dom';
import CreateTask from './create_task';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import { deleteTask, updateTask } from '../../actions/task_actions';
import update from 'react/lib/update';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    }
  }

  componentDidMount () {
    this.props.getAllTasksFromProjects(1)
    this.setState(
      { tasks: this.props.tasks }
    )
  }

  componentWillUpdate () {
    console.log("task index WILL UPDATE");
  }

  componentDidUpdate () {
    console.log("task index DID UPDATE");
  }

  componentWillReceiveProps(nextProps) {
    console.log("task index WILL RECEIVE PROPS");
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
    const { tasks, projectId, updateTask, } = this.props;

    return (
      <div className="task-index-wrapper">

        <section className="indices-section">
          <ul className="task-index">
            { tasks && tasks.map((task, indexOfTask) =>
              {
                return <TaskIndexItemsContainer
                  className="task-index-item"
                  key={ task.id }
                  task={ task }
                  index={ indexOfTask }
                  tasks= { tasks }
                />
              }
            )}

            <div
              className="create-task-wrapper">
              <CreateTaskContainer
                projectId={ this.props.projectId }
                tasks ={ tasks }
              />
            </div>
          </ul>
        </section>
      </div>
    )

  }
}

export default (TaskIndex);
