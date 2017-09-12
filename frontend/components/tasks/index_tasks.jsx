import React from 'react';
import { Route } from 'react-router-dom';
import CreateTask from './create_task';
import TaskIndexItemsContainer from './index_tasks_items_container';
import CreateTaskContainer from '../tasks/create_task_container';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";
import { deleteTask } from '../../actions/task_actions';

const taskTarget = {
  hover(props, monitor, component) {
    const dragTask = monitor.getItem();

    // console.log(monitor.getItem(), "Mon.itor.");
    // console.log(props, "PROPS props PROPS props!!!");

    if (dragTask.project_id !== props.projectId) {
      // const task = Object.assign({}, dragTask, { project_id: props.projectId });

      // monitor.getItem().project_id = props.projectId;
      // props.updateTask(task);

      // component.setState({ project_id: props.projectId });

      // props.destroyTask(dragTask.id);
      // monitor.getItem().setState({ project_id: monitor.getItem().projectId });
      // monitor.getItem().state.projects[projId].tasks[id].setState({});
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

  componentWillReceiveProps() {
    this.render();
  }

  componentDidUpdate() {
    this.render();
  }

  render () {
    const { tasks, projectId, updateTask, connectDropTarget } = this.props;
    // console.error(this.props);
    return connectDropTarget(
      <div className="task-index-wrapper">

        <section className="indices-section">
          <ul className="task-index">
            { tasks && Object.values(tasks).sort((a,b) => a.index - b.index).map((task, indexOfTask) => {
                return <TaskIndexItemsContainer
                className="task-index-item"
                key={ task.id }
                task={ task }
                index={ task.indexOfTask }
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





// hover(props, monitor, component) {
//   const dragTask = monitor.getItem();
//   // console.log(monitor.getItem(), "The monitor's item");
//   // const staten = dragTask.state
//   // console.log(staten, "I am state from hover");
//   // console.log(staten.tasks);
//   // let id = dragTask.id;
//   // let projId = props.projectId;
//   // let theTasks = staten.projects[projId].tasks;
//   // console.log(theTasks, "THE TASKS");
//   // console.log(staten.projects[projId]," ___ __ _ ____ projects of proj id");
//   // console.log(id);
//   // console.log(props.tasks, "props.tasks");
//   // const taskSave = props.tasks[id];
//   // console.log(taskSave, "task save");
//   // console.log(id);
//   console.log(monitor.getItem(), "Mon.itor.");
//   console.log(props, "PROPS props PROPS props!!!");
//   if (dragTask.project_id !== props.projectId) {
//     const task = Object.assign({}, monitor.getItem(), { project_id: props.projectId });
//
//     monitor.getItem().project_id = props.projectId;
//     props.updateTask(task);
//
//     component.setState({ project_id: props.projectId });
//     // props.destroyTask(id);
//     // monitor.getItem().setState({ project_id: monitor.getItem().projectId });
//     // monitor.getItem().state.projects[projId].tasks[id].setState({});
//     return;
//   }
//
//
//   // else if (dragTask.project_id === props.projectId) {
//   //   console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", monitor.getItem());
//   //   console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", props.tasks.first);
//   //   const task = Object.assign({}, monitor.getItem(), {id: props.tasks.id});
//   //
//   //   monitor.getItem().id = props.tasks.id;
//   //   props.updateTask(task);
//   // }
//
//   // const hoverTask = props.task;
//   // if (dragTask.id !== hoverTask.id) {
//   //   console.log(hoverTask);
//   //   const task = Object.assign({}, hoverTask)
//   //   // props.updateTask(task);
//   // }
// },
