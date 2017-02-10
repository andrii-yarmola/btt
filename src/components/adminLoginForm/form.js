import React from 'react';

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  onSubmit(e) {
    this.setState({ errors: {} });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data })
    );
  }
  
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form" encType="multipart/form-data" method="POST" action="server/php/" >
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <h1>Login</h1>
            <div className="form-row">
              <input 
                value={this.state.username}
                onChange={this.onChange}
                name="username"
                type="text"
                className="form-control"
                placeholder="Your Login"
                data-required="true"
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
            <div className="form-row">
              <input type="password"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
                className="form-control"
                placeholder="Your Password"
                data-required="true"
              />
              {errors.password && <span className="error-message">{errors.username}</span>}
              <div className="forgot-link">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <div className="form-row">
              <input type="checkbox" id="remember-box"></input>
              <label htmlFor="remember-box">Remember me</label>
            </div>
            <div className="form-row submit-row">
              <input className="btn btn-primary" type="submit" value="Login"></input>
            </div>
          </div>
        </div>
      </form>
    )
  }
};

AdminForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default AdminForm;