import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';
import ProjectIndexItem from './index_projects_items';
import getAllProjects from '../../actions/project_actions';
import CreateProjectContainer from '../projects/create_project_container'

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.getAllProjects();
  }

  render () {
    const { projects } = this.props;
    console.log(this.props);
    return (
      <div className="project-index-wrapper">

        <section className="indices-section">
          <ul className="project-index">
            { projects &&  projects.map(project =>
              <ProjectIndexItem className="project-index-item" key={ project.id }
                project={ project }
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

export default ProjectIndex;
