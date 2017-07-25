import { connect } from 'react-redux';

import { getAllTasks, deleteTask } from '../../actions/task_actions';
import TaskIndex from './index_tasks'
import { SelectorAllTasks } from '../../reducers/selectors'


const mapStateToProps = ({ tasks }, { match }) => ({
  tasks: SelectorAllTasks(tasks)
});

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);


// ,
// destroyTask: id => dispatch(deleteTask(id))
