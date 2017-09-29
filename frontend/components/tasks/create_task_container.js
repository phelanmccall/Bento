import { connect } from 'react-redux';

import { createTask } from '../../actions/task_actions';
import CreateTask from './create_task';

const mapStateToProps = ({ session, tasks }, index, createIndex) => {
  return {
    currentUser: session.currentUser,
    index: index.index,
    tasks,
  }
};

const mapDispatchToProps = (dispatch) => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask);
