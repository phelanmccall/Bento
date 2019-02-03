import  { connect }            from  'react-redux';
import  ProjectIndexItem       from  '../projects/index_projects_items';
import  { SelectorAllTasks }   from  '../../reducers/selectors';
import  { indexContainerLog }  from  '../../util/log_helpers'

import {
  destroyProject,
  updateProject,
  getAllProjects,
} from '../../actions/project_actions';

const mapStateToProps = ({projects, tasks, ...state},
                         {projectId, ...ownProps}) => {
  // indexContainerLog('projectItem', { state });
  // indexContainerLog('projectItem', { ownProps });
  // indexContainerLog('projectItem', { projects });
  // indexContainerLog('projectItem', { tasks });
  // indexContainerLog('projectItem', { projectId });
  const selectedTasksArray = SelectorAllTasks(tasks, projectId);
  indexContainerLog('projectItem', {selectedTasksArray});
  return {
    tasks:  selectedTasksArray,
    order:  projects.indicesOrder,
  }
};

const mapDispatchToProps = dispatch => ({
  updateProject:   (project)  =>  dispatch(updateProject(project)),
  destroyProject:  (id)       =>  dispatch(destroyProject(id)),
  getAllProjects:  (teamId)   =>  dispatch(getAllProjects(teamId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndexItem);
