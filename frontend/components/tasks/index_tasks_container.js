import { connect } from 'react-redux';

import { getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import TaskIndex from './index_tasks'
import { SelectorAllTasks } from '../../reducers/selectors'


const mapStateToProps = ({ tasks }, { match }, state, props) => ({

    state: state,

});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  destroyTask: id => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
