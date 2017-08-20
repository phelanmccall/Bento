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
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    e.preventDefault();
    const user = {username: "guest", password: "password"};
    this.props.guestLogin({user});
  }

  handleEnter (e) {
    e.preventDefault();
    if (e.key == 'Enter') {
    const user = this.state;
      };

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
      <div className="container-wrapper">

        <div className="white-box"></div>
        <div className="green-box"></div>
          <div className="green-box-text-wrapper">
            compartmentalizing <br />
            your daily tasks <br />
            just got easier
          </div>
        <div className="yellow-box">
          <div className="yellow-box-text-wrapper">
            compartmentalizing <br />
            your daily tasks <br />
            just got easier
          </div>
        </div>
        <div className="pink-box"></div>
        <div className="container-container">
          <SplashContainer />

          <div className="non-splash-container">
            <div className="error-box">
              { this.renderErrors() }
            </div>

            <div className="login-form">
              <form
                onSubmit={ this.handleSubmit }
                className="login-form-box"
              >
                <br />
                <div className="label-input-username">
                  <label>
                    <input
                      className="session-password-field"
                      placeholder="username"
                      type="text"
                      value={ this.state.username }
                      onChange={ this.update('username') }
                      className="login-user-input"
                      autoFocus
                    />
                  </label>
                </div>

                <br />

                <div className="label-input-password">
                  <label>
                    <input
                      className="session-password-field"
                      placeholder="password"
                      type="password"
                      value={ this.state.password }
                      onChange={ this.update('password') }
                      className="login-password-input"
                    />
                  </label>
                </div>
                <div className="login-form-container">
                  <div className="sub-guest-buttons">
                    <input
                      className="submit-button"
                      type="submit"
                      value={ this.props.formType === 'login' ? 'log in' : 'create account' }
                      />
                    <button
                      className="guest-button"
                      onClick={ this.handleGuestLogin }>
                        guest
                    </button>
                  </div>
                </div>

                <br />
                </form>
            </div>


          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
