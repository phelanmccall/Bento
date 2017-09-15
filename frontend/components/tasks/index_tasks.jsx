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
    // console.log("task index did MOUNT");
      this.props.getAllTasksFromProjects(this.props.projectId);
    // this.setState(
    //   { tasks: this.props.tasks }
    // )
  }

  componentWillUpdate () {
    // console.log("task index WILL update");
  }

  componentDidUpdate () {
    // console.log("task index DID update");
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps !== this.props) {
    //   this.props.getAllTasksFromProjects(this.props.projectId);
    // }
    // console.log("task index WILL Receive props");
    // this.setState(
    //   { tasks: this.state }
    // )
    // this.render();
    // console.log(this.state, "State after props");

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
                  updateTask={ this.props.updateTask }
                  destroyTask={ this.props.destroyTask }
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
