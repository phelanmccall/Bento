import { connect } from 'react-redux';
import { getSingleTask } from '../../actions/task_actions';
import TaskShow from './show_task';

const mapStateToProps = (state, { match }) => ({
  task: getSingleTask(state, match.params.id),
  creator_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  getSingleTask: id => dispatch(getSingleTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow);
