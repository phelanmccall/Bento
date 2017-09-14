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

    // console.log(monitor.getItem(), "Mon.itor.");
    // console.log(props, "PROPS props PROPS props!!!");

    if (dragTask.project_id !== props.projectId) {
      const task = Object.assign({}, dragTask, { project_id: props.projectId });

      // monitor.getItem().project_id = props.projectId;
      // props.updateTask(task);

      component.setState({ project_id: props.projectId });

      // props.destroyTask(dragTask.id);
      // monitor.getItem().setState({ project_id: monitor.getItem().projectId });
      // monitor.getItem().state.projects[projId].tasks[id].setState({});
      return;
    }


    // else if (dragTask.project_id === props.projectId) {
    //   // console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", monitor.getItem());
    //   // console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", props.tasks.first);
    //   const task = Object.assign({}, monitor.getItem(), {id: props.tasks.id});
    //
    //   monitor.getItem().id = props.tasks.id;
    //   props.updateTask(task);
    // }

    // const hoverTask = props.task;
    // if (dragTask.id !== hoverTask.id) {
    //   // console.log(hoverTask);
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
    const state = {
      tasks: []
    }
  }

  componentDidMount () {
    // console.log(this.state);
    this.props.getAllTasksFromProjects(1)
    // .then(
    //   () => this.setState(
    //     {tasks: this.filterTasksByProject(this.props.tasks, this.props.projectId)}
    //   )
    // );
    // this.forceUpdate();
    // console.log(this.props);
    // console.log(this.props.state.tasks);


    // console.error(this.props);
    this.setState(
      { tasks: this.props.tasksState }
    )
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
    // console.log(new_arr, "FILTERED $$CASH$$MONEY$");
    return new_arr

  }

  componentWillMount() {
    // this.props.getAllTasksFromProjects()
    // .then(
    //   () => this.setState(
    //     {tasks: this.props.tasks}
    //   )
    // );
    // this.setState(
    //   { tasks: this.props.state.tasks }
    // )
  }

  componentWillReceiveProps(nextProps) {
    // this.forceUpdate();
    console.error(this.state, "this.state.tasks");
    console.error(nextProps, "nextProps.tasks");

    if ( this.state.tasks.length !== nextProps.tasksState.length) {
      // console.error(this.state.tasks, "Previous State");
      // console.error(nextProps.tasks, "next props");
      this.setState(
        { tasks: nextProps.tasksState }
      )
      // console.log(this.state, "state after");
    }
  }


  componentDidUpdate() {

  }

  componentWillUpdate() {

  }

  //remove sort and then slice instead in model

  render () {
    const { projectId, updateTask, connectDropTarget } = this.props;
    const tasks = this.state ? this.props.tasksState : []
    let taskList = this.makeTaskArray(tasks)

    // console.error(taskList);
    //console.error(this.state ? this.state.tasks : [], "this.state.tasks");
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


// filterTasksByProject(this.props.tasks, this.props.projectId)





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
//   // console.log(monitor.getItem(), "Mon.itor.");
//   // console.log(props, "PROPS props PROPS props!!!");
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
//   //   // console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", monitor.getItem());
//   //   // console.log("HELLO PLEASE LOOK AT ME HELOOOOOOOO", props.tasks.first);
//   //   const task = Object.assign({}, monitor.getItem(), {id: props.tasks.id});
//   //
//   //   monitor.getItem().id = props.tasks.id;
//   //   props.updateTask(task);
//   // }
//
//   // const hoverTask = props.task;
//   // if (dragTask.id !== hoverTask.id) {
//   //   // console.log(hoverTask);
//   //   const task = Object.assign({}, hoverTask)
//   //   // props.updateTask(task);
//   // }
// },
