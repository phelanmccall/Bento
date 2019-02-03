import  { connect }                   from  'react-redux';
import  ProjectIndex                  from  './index_projects';
import  { SelectorOrderAllProjects }  from  '../../reducers/selectors';
import  { getAllTasksFromProjects }   from  '../../actions/task_actions';
import  { indexContainerLog }         from  '../../util/log_helpers'

import {
  getAllProjects,
  destroyProject,
  updateProject,
} from '../../actions/project_actions';

// => args are: state (the state from the whole store),
//         and: ownProps (the props passed into the container)
//    one can boil the state down to the slice required with destructuring
//    e.g., { projects } here in place of state, or { projects, ...state }
//    every object returned below is available as props
const mapStateToProps = ({ projects, ...state }, ownProps) => {
  indexContainerLog('projects', { state });
  indexContainerLog('projects', { ownProps });
  indexContainerLog('projects', { projects });

  const selectedProjectsArray  =  SelectorOrderAllProjects(projects);
  const projectIndicesOrder    =  projects.indicesOrder;

  indexContainerLog('projects', { selectedProjectsArray });
  indexContainerLog('projects', { projectIndicesOrder });
  indexContainerLog('projects', { projects });

  return {
    projects:  selectedProjectsArray,
    order:     projectIndicesOrder
  }
};

// => every object returned below is available as props
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects:  (teamId)  =>  dispatch(getAllProjects(teamId)),
    updateProject:   (proj)    =>  dispatch(updateProject(proj)),
    destroyProject:  (id)      =>  dispatch(destroyProject(id)),
    getAllTasksFromProjects: (teamId) => dispatch(
      getAllTasksFromProjects(teamId)
    ),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
