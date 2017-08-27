import { connect } from 'react-redux';

import { getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import TaskIndex from './index_tasks'
import { SelectorAllTasks } from '../../reducers/selectors'


const mapStateToProps = ({ tasks }, { match }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);


// ,
// destroyTask: id => dispatch(deleteTask(id))
