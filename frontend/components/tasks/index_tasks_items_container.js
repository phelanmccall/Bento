import { connect } from 'react-redux';

import { RECEIVE_TASK, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import TaskIndexItems from './index_tasks_items'



const mapStateToProps = ({ tasks }, { match }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
