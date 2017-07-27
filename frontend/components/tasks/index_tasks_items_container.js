import { connect } from 'react-redux';

import { RECEIVE_TASK, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import TaskIndexItems from './index_tasks_items'



const mapStateToProps = (state , props) => {
  // console.log("this is the state", state);
  // console.log("these are the props", props);
  return {
  state: state,
  project_id: props.task.project_id,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
