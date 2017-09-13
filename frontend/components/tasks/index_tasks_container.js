import { connect } from 'react-redux';

import { getAllTasksFromProjects, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import TaskIndex from './index_tasks'
import { SelectorAllTasks } from '../../reducers/selectors'


const mapStateToProps = ({ tasks }, { match }, state, props) => ({
  tasks: SelectorAllTasks(tasks),  
  state: state,

});

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (projectId) => dispatch(getAllTasksFromProjects(projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  destroyTask: id => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
