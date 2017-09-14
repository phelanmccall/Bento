import { connect } from 'react-redux';

import { getAllTasksFromProjects, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';

import TaskIndex from './index_tasks';

import { SelectorAllTasks } from '../../reducers/selectors';

import update from 'react/lib/update';



const mapStateToProps = ({ tasks, projectId, tasksState} ) =>{
// console.error(project, match, state, props, "here we are");
// console.log(projectId, "PROJECT IDEAADDASD");
return {
  tasks: SelectorAllTasks(tasks, projectId),
  // tasks: tasksState,
  // state: state,
}
// console.log(tasks);
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


// { match }, state, props
