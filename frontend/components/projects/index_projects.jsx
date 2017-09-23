import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';

import ProjectIndexItemContainer from '../projects/index_projects_item_container';

import { getAllProjects, updateProject, destroyProject } from '../../actions/project_actions';

import CreateProjectContainer from './create_project_container';

import TeamFormContainer from '../team/team_form_container';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProjects(parseInt(this.props.match.params.teamId));
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(nextProps.match.params.teamId) !== parseInt(this.props.match.params.teamId)) {
      this.props.getAllProjects(parseInt(nextProps.match.params.teamId));
    }
  }

  render () {
    const { projects, updateProject, destroyProject, } = this.props;

    return (
      <div className="project-index-wrapper">

        <section className="indices-section">
          <ul className="project-index">
            <div className="create-team-form-wrapper">

            </div>

            { projects && projects.sort((a,b) => a.index - b.index).map((project, idx) =>
              <ProjectIndexItemContainer
                className="project-index-item" key={ project.id }
                project={ project }
                updateProject={ this.props.updateProject }
                destroyProject={ this.props.destroyProject }
                index={ idx }
                projectId={ project.id }
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

export default (ProjectIndex);
