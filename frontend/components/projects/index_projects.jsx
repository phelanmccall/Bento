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
      <section className="indices">
        <div className="create-project-container">
          <CreateProjectContainer />
        </div>
        <ul className="projectindex">
            { projects &&  projects.map(project =>
              <ProjectIndexItem className="project-index-item" key={ project.id }
                project={ project }
              />
            )
          }
        </ul>
      </section>
    )
  }
}

export default ProjectIndex;
