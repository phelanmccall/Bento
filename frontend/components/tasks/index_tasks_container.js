import { connect } from 'react-redux';

import { getAllTasksFromProjects, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';

import TaskIndex from './index_tasks';

import { SelectorAllTasks } from '../../reducers/selectors';

import update from 'react/lib/update';



const mapStateToProps = ({ tasks, projectId, tasksState} ) => {
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
