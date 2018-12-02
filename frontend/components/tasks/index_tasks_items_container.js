import { connect } from 'react-redux';
import TaskIndexItems from './index_tasks_items';

import {
  getAllTasksFromProjects,
  deleteTask,
  updateTask,
} from '../../actions/task_actions';

const mapStateToProps = (_state, props) => {
  return {
    key:         props.task.id,
    index:       props.index,
    tasks:       props.tasks,
    id:          props.task.id,
    team_id:     props.task.team_id,
    project_id:  props.task.project_id,
    checked:     props.task.checked,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasksFromProjects: (teamId) => dispatch (
    getAllTasksFromProjects(teamId)
  ),
  updateTask:    (task)  =>  dispatch(updateTask(task)),
  deleteTask:    (id)    =>  dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskIndexItems);
