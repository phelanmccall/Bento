import React from 'react';
import { Route } from 'react-router-dom';

import CreateTask from './create_task';
import TaskIndexItemsContainer from './index_tasks_items_container';
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
            { tasks && Object.values(tasks).map(task => {
                return <TaskIndexItemsContainer
                className="task-index-item"
                key={ task.id }

                task={ task }
              />
              }
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
