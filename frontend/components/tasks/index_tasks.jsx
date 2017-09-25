import React from 'react';
import { Route } from 'react-router-dom';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';

import {
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

import { ItemTypes } from "../../util/dnd_constants.js";

import {
  DragSource,
  DropTarget,
} from 'react-dnd';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.tasks,
    }
  }

  componentDidMount () {
      this.props.getAllTasksFromProjects(this.props.projectId);
  }

  render () {
    const { tasks, projectId, updateTask, } = this.props;

    console.log(tasks, "Render function tasks");
    console.log(projectId, "Render function p ID");
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
