import { connect } from 'react-redux';

import { RECEIVE_TASK, REMOVE_TASK, getAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import { updateProject} from '../../actions/project_actions';
import TaskIndexItems from './index_tasks_items'

// moveCard(id, atIndex) {
//     const { card, index } = this.findCard(id);
//     this.setState(update(this.state, {
//       cards: {
//         $splice: [
//           [index, 1],
//           [atIndex, 0, card],
//         ],
//       },
//     }));
//   }
//
//   findCard(id) {
//     const { cards } = this.state;
//     const card = cards.filter(c => c.id === id)[0];
//
//     return {
//       card,
//       index: cards.indexOf(card),
//     };
//   }

const mapStateToProps = (state , props) => {
  return {
  state: state,
  id: props.task.id,
  project_id: props.task.project_id,
  details: props.task.details,
  index: props.task.index,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateProject: (project) => dispatch(updateProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItems);
