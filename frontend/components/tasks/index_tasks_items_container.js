import { connect } from 'react-redux';

import { RECEIVE_TASK, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import { updateProject} from '../../actions/project_actions';
import TaskIndexItems from './index_tasks_items'



const mapStateToProps = (state , props) => {
  return {
  state: state,
  project_id: props.task.project_id,
  details: props.task.details,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  updateProject: (project) => dispatch(updateProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
