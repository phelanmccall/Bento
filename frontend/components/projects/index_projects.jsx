import React from 'react';
import { Route } from 'react-router-dom';

import CreateProject from './create_project';
import ProjectIndexItem from './index_projects_items';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.getAllProjects();
  }

  render () {
    const { projects, destroyProject, updateProject } = this.props;
    return (
      <section className="indices">
        <ul className="projectindex">
          <h1>These are all of the projects</h1>
          {projects.map(project =>
            <ProjectIndexItem key={ project.id }
              project={ project }
              destroyProject={ destroyProject }
              updateProject={ updateProject }
            />
          )}
        </ul>
      </section>
    )
  }
}

export default ProjectIndex;
