import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SplashContainer from '../splash/splash_container'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuestLogin(e) {
    const user = {username: "guest", password: "password"};
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render () {
    return (
      <div className="container-container">

        <div className="login-form-container">
          <form
            onSubmit={ this.handleSubmit }
            className="login-form-box"
          >

          <SplashContainer />

          { this.renderErrors() }

            <div className="login-form">
                <br />
                <label>Username:
                  <input
                    type="text"
                    value={ this.state.username }
                    onChange={ this.update('username') }
                    className="login-user-input"
                  />
                </label>

                <br />

                <label>Password:
                  <input
                    type="password"
                    value={ this.state.password }
                    onChange={ this.update('password') }
                    className="login-password-input"
                  />
                </label>

                <br />

                <input className="submit-button" type="submit" value="Submit" />


            </div>
          </form>
        </div>
        <button
          className="guest-button"
          onClick={ this.handleGuestLogin }>
          Guest Login
        </button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
