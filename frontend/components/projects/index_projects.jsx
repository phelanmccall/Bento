import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';

import ProjectIndexItemContainer from '../projects/index_projects_item_container';

import {
  getAllProjects,
  updateProject,
  destroyProject
} from '../../actions/project_actions';

import { getAllTasksFromProjects } from '../../actions/task_actions';

import CreateProjectContainer from './create_project_container';

import TeamFormContainer from '../team/team_form_container';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let teamIdFromURL = this.props.match.params.teamId;

    this.props.getAllProjects(parseInt(teamIdFromURL));
    this.props.getAllTasksFromProjects(parseInt(teamIdFromURL))
  }

  componentWillReceiveProps(nextProps) {
    let teamIdFromURL = this.props.match.params.teamId;
    let nextTeamIdURL = nextProps.match.params.teamId;
    
    console.log("%cHere are this.props:", "color: green; background-color: black;", this.props);
    console.log("%cHere are the nextProps:", "color: red; background-color: black;", nextProps);
    
    if (parseInt(nextTeamIdURL) !== parseInt(teamIdFromURL)) {
      this.props.getAllProjects(parseInt(nextTeamIdURL));
      this.props.getAllTasksFromProjects(parseInt(nextTeamIdURL));
    }
  }

  render() {
    const { projects, updateProject, destroyProject, } = this.props;

    return (
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

            <div className="create-project-wrapper">
              <CreateProjectContainer />
            </div>
          </ul>
        </section>
      </div>
    );
  }
}

export default (ProjectIndex);
