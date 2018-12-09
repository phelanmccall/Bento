import { connect } from 'react-redux';
import TaskIndex from './index_tasks';
import { SelectorAllTasks } from '../../reducers/selectors';
import { getAllProjects } from '../../actions/project_actions';
import {
  getAllTasksFromProjects,
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

const mapStateToProps = (props, { tasks, projectId, teamId }) => {
  return {
    tasks: SelectorAllTasks(props.tasks, projectId),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: (teamId) => dispatch(getAllProjects(teamId)),
    getAllTasksFromProjects: (teamId) => dispatch (
      getAllTasksFromProjects(teamId)
    ),
    updateTask:     (task)  =>  dispatch(updateTask(task)),
    destroyTask:    (id)    =>  dispatch(deleteTask(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
