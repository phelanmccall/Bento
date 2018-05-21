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
      // let changed = true;
      // this.setState({changed});
    }// else {
    //   let changed = false;
    //   this.setState({changed});
    // }
    // if (this.state.changed === true) {
    //   console.log("HELLOOOOO THEREERERERERERLERLERLELR");
    // }

  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("%cHere are this.state:", "color: green; background-color: black;", this.state);
    // console.log("%cHere are the nextState:", "color: red; background-color: black;", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("%cWell hello there! Props received!", "color: yellow; background-color: black;");
    // console.log("%cHere are this.state:", "color: green; background-color: black;", this.state);
    // console.log("%cHere are the nextState:", "color: red; background-color: black;", prevState);

    // this.props.getAllTasksFromProjects(parseInt(this.props.match.params.teamId));
  }

  render() {
    const { projects, updateProject, destroyProject, } = this.props;
    const projCount = this.props.projects.length ? 0 : this.props.projects.length

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

export default (ProjectIndex);
