import React from 'react';
import { Route } from 'react-router-dom';

import CreateTask from './create_task';
import TaskIndexItem from './index_tasks_items';
// import getAllTasks from '../../actions/task_actions';
import CreateTaskContainer from '../tasks/create_task_container'

class TaskIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {
    const { tasks } = this.props;

    return (
      <div className="task-index-wrapper">

        <section className="indices-section">
          <ul className="task-index">
            { tasks && Object.values(tasks).map(task =>
              <TaskIndexItem
                className="task-index-item"
                key={ task.id }
                projectId={task.projectId}
                task={ task }
              />

            )}

            <div
              className="create-task-wrapper">
              <CreateTaskContainer projectId={this.props.projectId}/>
            </div>
          </ul>
        </section>
      </div>
    )
  }
}

export default TaskIndex;
