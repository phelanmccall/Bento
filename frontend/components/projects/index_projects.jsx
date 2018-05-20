import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';

import ProjectIndexItemContainer from '../projects/index_projects_item_container';

import {
  getAllProjects,
  updateProject,
  destroyProject,
} from '../../actions/project_actions';

import { getAllTasksFromProjects } from '../../actions/task_actions';

import CreateProjectContainer from './create_project_container';

import TeamFormContainer from '../team/team_form_container';

import { ItemTypes } from "../../util/dnd_constants.js";
import { DragSource, DropTarget } from 'react-dnd';

const projectTarget = {
  hover(props, monitor, component) {
    const dragProject = monitor.getItem();

    if (dragProject.index !== props.index) {
      const project = Object
        .assign({}, monitor.getItem(), { index: props.index });

      monitor.getItem().index = props.index;
      props.updateProject(project);

      console.log("%cHere are this.props:", "color: pink; background-color: black;", props);
      console.log("%cHere is the projects:", "color: magenta; background-color: black;", project);

      component.setState({
        index: props.index,
        team_id: props.teamId,
      });

      setTimeout(() => props.getAllProjects(props.teamId), 65);
      return;
    }
  }
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   changed: false,
    // };
  }

  componentDidMount() {
    let teamIdFromURL = this.props.match.params.teamId;

    this.props.getAllProjects(parseInt(teamIdFromURL));
    this.props.getAllTasksFromProjects(parseInt(teamIdFromURL))
  }

  componentWillReceiveProps(nextProps) {
    let teamIdFromURL = this.props.match.params.teamId;
    let nextTeamIdURL = nextProps.match.params.teamId;


    if (parseInt(nextTeamIdURL) !== parseInt(teamIdFromURL)) {
      this.props.getAllProjects(parseInt(nextTeamIdURL));
      this.props.getAllTasksFromProjects(parseInt(nextTeamIdURL));
    }
  }

  render() {
    const { projects,
            updateProject,
            destroyProject,
            connectDropTarget,
          } = this.props;
    const projCount = this.props.projects.length ? 0 : this.props.projects.length

    return connectDropTarget(
      <div className="project-index-wrapper">

        <section className="indices-section">
          <ul className="project-index">
            <div className="create-team-form-wrapper">

            </div>

            { projects && projects.sort((a,b) => a.index - b.index)
              .map((project, idx) =>
                <ProjectIndexItemContainer
                  className="project-index-item"
                  project={ project }
                  updateProject={ this.props.updateProject }
                  destroyProject={ this.props.destroyProject }
                  index={ idx }
                  projectId={ project.id }
                  key={ project.id }
                />
              )
            }

            {
              <div className="create-project-wrapper">
                <CreateProjectContainer
                  projectCount={ projCount }
                />
              </div>
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default DropTarget(
  ItemTypes.PROJECT,
  projectTarget,
  collectTarget,
)(ProjectIndex);
