import React from 'react';
import { Route } from 'react-router-dom';
import CreateTask from './create_task';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

const taskTarget = {
  hover(props, monitor, component) {
    const dragTask = monitor.getItem();

    if (dragTask.project_id !== props.projectId) {
      const task = Object.assign({}, monitor.getItem(), { project_id: props.projectId });

      monitor.getItem().project_id = props.projectId;
      props.updateTask(task);

      component.setState({ project_id: props.projectId });
      return;
    }


    // else if (dragTask.project_id === props.projectId) {
    //   console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", monitor.getItem());
    //   console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", props.tasks.first);
    //   const task = Object.assign({}, monitor.getItem(), {id: props.tasks.id});
    //
    //   monitor.getItem().id = props.tasks.id;
    //   props.updateTask(task);
    // }

    // const hoverTask = props.task;
    // if (dragTask.id !== hoverTask.id) {
    //   console.log(hoverTask);
    //   const task = Object.assign({}, hoverTask)
    //   // props.updateTask(task);
    // }
  },
  // drop(props, monitor, component) {
  //     component.setState({ project_id: props.projectId });
  //     component.forceUpdate();
  //     return props;
  // },
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { tasks, projectId, updateTask, connectDropTarget } = this.props;
    // console.error(this.props);
    return connectDropTarget(
      <div className="task-index-wrapper">

        <section className="indices-section">
          <ul className="task-index">
            { tasks && Object.values(tasks).map((task, indexOfTask) => {
                return <TaskIndexItemsContainer
                className="task-index-item"
                key={ task.id }
                task={ task }
                index={ indexOfTask }
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

export default DropTarget(
  ItemTypes.TASK,
  taskTarget,
  collectTarget
)(TaskIndex);
