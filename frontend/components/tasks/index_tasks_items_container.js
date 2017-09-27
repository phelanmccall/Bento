import { connect } from 'react-redux';
import TaskIndexItems from './index_tasks_items';

import {
  getAllTasksFromProjects,
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

const mapStateToProps = (state, props) => {
  return {
    id: props.task.id,
    project_id: props.task.project_id,
    details: props.task.details,
    index: props.task.index,
    tasks: props.tasks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (projectId) => dispatch (
    getAllTasksFromProjects(projectId)
  ),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
