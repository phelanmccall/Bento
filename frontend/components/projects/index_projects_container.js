import { connect } from 'react-redux';
import ProjectIndex from './index_projects';
import { SelectorAllProjects } from '../../reducers/selectors';

import {
  getAllProjects,
  deleteProject,
  updateProject,
} from '../../actions/project_actions';

import { getAllTasksFromProjects } from '../../actions/task_actions';

const mapStateToProps = ({ projects }) => {
  return {
    projects: SelectorAllProjects(projects),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects:  (teamId)  =>  dispatch(getAllProjects(teamId)),
    updateProject:   (proj)    =>  dispatch(updateProject(proj)),
    destroyProject:  (id)      =>  dispatch(deleteProject(id)),
    getAllTasksFromProjects: (teamId) => dispatch(
      getAllTasksFromProjects(teamId)
    ),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
