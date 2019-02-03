import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer
  from './session_form_component/session_form_container';
import NavbarContainer                from './navigation_bar/nav_bar_container';
import IndexProjectContainer          from './projects/index_projects_container';
import IndexTeamContainer             from './team/index_teams_container';
import { AuthRoute, ProtectedRoute }  from '../util/route_util';
import { DragDropContext }            from 'react-dnd';
import HTML5Backend                   from 'react-dnd-html5-backend';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { displayTeams: true };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  componentDidMount () {
    $(this.draglogo).draggable({
      snap:     '.Bento',
      snapMode: 'outer'
    });
  }

  toggleDisplay() {
    // this.
  }

  render () {
    const { displayTeams } = this.state;

    console.log('displayTeams', displayTeams);
    console.log('displayTeams', displayTeams);
    console.log('displayTeams', displayTeams);
    console.log('displayTeams', displayTeams);
    console.log('displayTeams', displayTeams);

    return (
  <div className='app'>
    <div className='header-flex-container'>
      <div className='logo-spacer'>
        <div className='logo-container'>
          <Link to='/login'>
            <img
              ref={(el) => {
                this.draglogo = el;
              }} src='http://res.cloudinary.com/atomc/image/upload/v1500531260/Bento-Logo_fjv1os.png'>
            </img>
          </Link>
        </div>
      </div>
      <div className='spacer'></div>
      <div className='header-container'>
        <header>
            <Link to='/login'><h1 className='Bento'>Bento</h1></Link>
        </header>
      </div>
      <div className='spacer'></div>
      <div className='nav-splash-container'>
          <div className='nav-splash-spacer'>
            <NavbarContainer />
          </div>
          <div className='spacer'></div>
      </div>
    </div>
    <div className='routes-container'>
      <div className='wasReactRouterSwitchBefore'>
        <div className='auth-routes-div'>
          <div className='session-form-containers-wrapper'>
            <div className='session-form-containers'>
              <AuthRoute
                path       =  '/login'
                component  =  { SessionFormContainer }
              />
              <AuthRoute
                path       =  '/signup'
                component  =  { SessionFormContainer }
              />
            </div>
          </div>
        </div>
        <div className='protected-routes-container'>
          <ProtectedRoute
            path        =  '/'
            component   =  { IndexTeamContainer }
            render      =  { (props) => < IndexTeamContainer { ...props }
                               displaySelf    =  { displayTeams }
                               toggleDisplay  =  { this.toggleDisplay }
                             />
                           }
          />
          <ProtectedRoute
            exact path  =  '/api/teams/:teamId'
            component   =  { IndexProjectContainer }
          />
        </div>
      </div>
    </div>

  </div>
)}
};

export default (DragDropContext(HTML5Backend)(App));
