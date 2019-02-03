import React from 'react';
import  { Route }  from  'react-router-dom';
import  update     from  'immutability-helper';

import ProjectIndexItemContainer from '../projects/index_projects_item_container';

import  { indexLog }                  from  '../../util/log_helpers'
import  { getAllTasksFromProjects }   from  '../../actions/task_actions';
import  CreateProjectContainer        from  './create_project_container';
import  {SelectorOrderAllProjects}    from  '../../reducers/selectors';

// import {
//   getAllProjects,
//   updateProject,
//   destroyProject,
// } from '../../actions/project_actions';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    let teamIdFromURL = this.props.match.params.teamId;
    // this.props.getAllProjects(parseInt(teamIdFromURL));
    this.state = {
       order:     [],
       projects:  [],
    };

    // console.log('%cEdkjnfaksdfjnasdf',
    //             `background:linear-gradient(90deg, #0be4a3 0%, #fed9ca 33%, #66ec97 66%, #e1afb2 96%);
    //              color:black;
    //              font-size:14px;
    //              border: black 3px solid`,
    //             this.props.getAllProjects(parseInt(teamIdFromURL)));
    // this.handleDrag       =  this.handleDrag       .bind(this);;
    this.gimmeStateProjs  =  this.gimmeStateProjs  .bind(this);;
    this.createProjo      =  this.createProjo      .bind(this);;
  }

  // handleDrag(dragIndex, hoverIndex) {
  //   const { cards } = this.state
  //   const dragProject = cards[dragIndex]

    // this.setState(
    //   update(this.state, {
    //     projects: {
    //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragProject]],
    //     },
    //   }),
    // )
  // }

  createProjo(projects, project) {
    this.setState(
      update(this.state, {
        projects: { $splice: [[projects.length, project]] },
      }),
    )
  }

  gimmeStateProjs(projects, dragIndex, hoverIndex, dragProjectId) {
    // console.log('%cgimmeStateProjs has been invoked', 'border: 2px solid cyan');
    // console.log('param projects at gimmeStateProjs', projects);
    // console.log('this.state.order at gimmeStateProjs', this.state.order);
    // console.log('this.state at gimmeStateProjs', this.state);
    this.setState(
      update(this.state, {
        order: { $splice: [[dragIndex, 1], [hoverIndex, 0, dragProjectId]] },
      }),
    )
    // console.log('this.state.order at gimmeStateProjs', this.state.order);
  }

  componentDidMount() {
    let teamIdFromURL = this.props.match.params.teamId;
    // console.log('teamIdFromURL', teamIdFromURL);
    ;
    this.props.getAllProjects(parseInt(teamIdFromURL)).then(
        () => {
          this.setState({
            order:     this.props.order,
            projects:  this.props.projects,
          });
        })
    this.props.getAllTasksFromProjects(parseInt(teamIdFromURL));
    // this.setState((state, props) => ({
    //   order:     this.state.order,
    //   projects:  this.state.projects,
    // }))
    const thisState = this.state;
    indexLog('projects componentDidMount', {thisState})

  }

  componentWillReceiveProps(nextProps) {
    let teamIdFromURL = this.props.match.params.teamId;
    let nextTeamIdURL = nextProps.match.params.teamId;
    let thisState = this.state;
    indexLog('projects componentWillReceiveProps beforeSet', {thisState})
    this.setState(((state, props) => ({
      order:     this.props.order,
      projects:  this.props.projects,
    })), () => {
      thisState = this.state;
      indexLog('projects componentWillReceiveProps afterSet', {thisState})
    })


    if (parseInt(nextTeamIdURL) !== parseInt(teamIdFromURL)) {
      this.props.getAllProjects(parseInt(nextTeamIdURL));
      this.props.getAllTasksFromProjects(parseInt(nextTeamIdURL));
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('%cHere are this.state:', 'color: black; background-color: orange;', this.state);
    // console.log('%cHere are nextProps:', 'color: black; background-color: orange;', nextProps);
    // console.log('%cHere are the nextState:', 'color: black; background-color: orange;', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('%cWell hello there! Props received!', 'color: yellow; background-color: black;');
    // console.log('%cHere are this.state:', 'color: black; background-color: orangered;', this.state);
    // console.log('%cHere are prevProps:', 'color: black; background-color: orangered;', prevProps);
    // console.log('%cHere are the prevState:', 'color: black; background-color: orangered;', prevState);

    // this.props.getAllTasksFromProjects(parseInt(this.props.match.params.teamId));
  }

  render() {
    const { updateProject, destroyProject } = this.props;
    // const projCount = projects.length
    //                     ? 0
    //                     : projects.length
    // const projectsOrd = projects.indicesOrder
    console.log('%cthis.state @ index_projects', 'background-color: #000; color: cyan', this.state);
    // console.log('%cthis.state.projects @ index_projects', 'background-color: #000; color: cyan', this.state.projects);
    // console.log('%cthis.props @ index_projects', 'background-color: #000; color: #F33434', this.props);
    // if (projects.length > 0){
    // console.log('%cproppy projects @ index_projects', 'background-color: #000; color: #F33434', projects);}
    // console.log('projectsOrd', projectsOrd);
      const projOrd = this.state.order || [];
      console.log('%cthis.state.order @ index_projects', 'background-color: #000; color: #F33434; border: 1px solid yellow', this.state.order);
    return (
      <div className='project-index-wrapper'>

        <section className='indices-section'>
          <ul className='project-index'>
            <div className='create-team-form-wrapper'>

            </div>

            { this.state.projects && this.state.projects.map((project, idx) =>
              <ProjectIndexItemContainer
                key             =  { `statePro-${project.id}` }
                className       =  'project-index-item'
                project         =  { project }
                updateProject   =  { this.props.updateProject }
                destroyProject  =  { this.props.destroyProject }
                index           =  { idx }
                projectId       =  { project.id }
                handleDrag      =  { this.handleDrag }
                gimmeStateProjs =  { this.gimmeStateProjs }
                createProjo     =  { this.createProjo }
              />
            )}


              <div className='create-project-wrapper'>
                <CreateProjectContainer
                  projectCount={ this.state.projects && this.state.projects.length }
                />
              </div>

          </ul>
        </section>
      </div>
    );
  }
}

export default (ProjectIndex);


// { projOrd && projOrd.map((projId, idx) =>
//   <ProjectIndexItemContainer
//     key             =  { `ProjtemContainer-${projId}` }
//     className       =  'project-index-item'
//     project         =  { this.props.projects[projId] }
//     updateProject   =  { this.props.updateProject }
//     destroyProject  =  { this.props.destroyProject }
//     index           =  { idx }
//     projectId       =  { projId }
//     handleDrag      =  { this.handleDrag }
//     gimmeStateProjs =  { this.gimmeStateProjs }
//   />
// )}
