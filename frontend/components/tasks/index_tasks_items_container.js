import { connect } from 'react-redux';

import { getSingleTasks, getAllTasksFromProjects, RECEIVE_TASK, REMOVE_TASK, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import { updateProject} from '../../actions/project_actions';
import TaskIndexItems from './index_tasks_items'

const mapStateToProps = (state , props) => {
  return {
  state: state,
  id: props.task.id,
  project_id: props.task.project_id,
  details: props.task.details,
  index: props.task.index,
  tasks: props.tasks,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (projectId) => dispatch(getAllTasksFromProjects(projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateProject: (project) => dispatch(updateProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
