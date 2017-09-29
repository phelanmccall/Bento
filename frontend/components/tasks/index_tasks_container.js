import { connect } from 'react-redux';
import TaskIndex from './index_tasks';
import { SelectorAllTasks } from '../../reducers/selectors';
import {
  getAllTasksFromProjects,
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

const mapStateToProps = (props, { tasks, projectId, teamId, match } ) => {
  return {
    tasks: SelectorAllTasks(props.tasks, projectId),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasksFromProjects: (teamId) => dispatch (
      getAllTasksFromProjects(teamId)
    ),
    updateTask: (task) => dispatch(updateTask(task)),
    destroyTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
