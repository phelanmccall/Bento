import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';
import ProjectIndexItem from './index_projects_items';
import { getAllProjects, updateProject, destroyProject } from '../../actions/project_actions';
import CreateProjectContainer from './create_project_container'
import TeamFormContainer from '../team/team_form_container';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from "../../util/dnd_constants.js";

// const projectTarget = {
//   hover(props, monitor, component) {
//     const dragProject = monitor.getItem();
//     const project = Object.assign({}, monitor.getItem(), { index: props.index });
//   }
// }
//
// function collectTarget (connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget()
//   };
// }

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  // window.addEventListener('mouseup', () => {
  //   this.forceUpdate
  // });

  componentDidMount() {
    // console.log(this.props, "Props from index projects");
    // console.log(this.props.match.params.teamId, "the match");
    this.props.getAllProjects(parseInt(this.props.match.params.teamId));

    this.elRef.addEventListener('mouseup', () => {
      this.forceUpdate();
    });
  }



  componentWillReceiveProps(nextProps) {

    if (parseInt(nextProps.match.params.teamId) !== parseInt(this.props.match.params.teamId)) {
      this.props.getAllProjects(parseInt(nextProps.match.params.teamId));
    }

    this.render();
  }

  componentDidUpdate() {
    this.render();
  }

  render () {
    // connectDropTarget,
    const { projects, updateProject, destroyProject } = this.props;
// connectDropTarget
    // console.error(projects);
    return (
      <div ref={element => this.elRef = element} className="project-index-wrapper">

        <section className="indices-section">
          <ul className="project-index">
            <div className="create-team-form-wrapper">

            </div>

            { projects && projects.sort((a,b) => a.index - b.index).map((project, idx) =>
              <ProjectIndexItem
                ref={element => this.elRef = element}
                className="project-index-item" key={ project.id }
                project={ project }
                updateProject={ this.props.updateProject }
                index={ idx }
              />

          )}

            <div
              className="create-project-wrapper">
              <CreateProjectContainer />
            </div>
          </ul>
        </section>
      </div>
    )
  }
}
// DropTarget(
//   ItemTypes.PROJECT,
//   projectTarget,
//   collectTarget
// )
export default (ProjectIndex);


// .sort(function(x, y){
//   var index = "index"
//   if (x[index] < y[index]) {
//       return -1;
//   }
//   if (x[index] > y[index]) {
//       return 1;
//   }
//   return 0;
// })
