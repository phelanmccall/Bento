import { connect } from 'react-redux';

import { getAllTasksFromProjects, deleteTask, updateTask } from '../../actions/task_actions';

import TaskIndex from './index_tasks';

import { SelectorAllTasks } from '../../reducers/selectors';

const mapStateToProps = (props, { tasks, projectId, } ) => {
  // console.log(props.tasks, "props.tasks");
  // console.log(projectId, "projectId");
  // console.log(SelectorAllTasks(props.tasks, projectId), "SelectorAllTasks(props.tasks, projectId)");
  return {
    tasks: SelectorAllTasks(tasks, projectId),
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (projectId) => dispatch(getAllTasksFromProjects(projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  destroyTask: (id) => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
