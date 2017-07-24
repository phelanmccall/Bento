import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter, history, Link } from 'react-router-dom';
import merge from 'lodash/merge';
import CreateProjectContainer from './create_project_container';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.getSingleProject(newProps.match.params.id);
    }
  }

  render () {
    const { project } = this.props;
    return (
      <section className="show-container">
        <section className="project-show">
          <h1>{ project.title }</h1>
          <h1> hi </h1>
          <CreateProjectContainer />
        </section>
      </section>
    );
  }
}

export default ProjectShow;
