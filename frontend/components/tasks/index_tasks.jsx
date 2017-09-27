import React from 'react';
import { Route } from 'react-router-dom';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';
import { ItemTypes } from "../../util/dnd_constants.js";

import {
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

import {
  DragSource,
  DropTarget,
} from 'react-dnd';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.tasks,
    };
  }

  componentDidMount() {
      this.props.getAllTasksFromProjects(this.props.projectId);
  }

  // componentWillReceiveProps() {
  //   this.props.getAllTasksFromProjects(this.props.projectId);
  // }

  render() {
    const { tasks, projectId, updateTask, } = this.props;

    return (
      <div className="task-index-wrapper">
        <section className="indices-section">
          <ul className="task-index">
            { tasks && tasks.map((task, indexOfTask) =>
              {
                return (
                  <TaskIndexItemsContainer
                    className="task-index-item"
                    task={task}
                    index={indexOfTask}
                    tasks= {tasks}
                    updateTask={this.props.updateTask}
                    destroyTask={this.props.destroyTask}
                    key={task.id}
                  />
                );
              }
            )}

            <div
              className="create-task-wrapper">
              <CreateTaskContainer
                projectId={this.props.projectId}
                tasks ={tasks}
              />
            </div>
          </ul>
        </section>
      </div>
    );
  }
}

export default (TaskIndex);
