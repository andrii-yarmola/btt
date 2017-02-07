import React from 'react'

const AdminForm = React.createClass({
  render() {
    return (
      <form className="login-form" encType="multipart/form-data" method="POST" action="server/php/" >
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <h1>!11Login</h1>
            <div className="form-row">
              <input type="text" className="form-control" placeholder="Your Login" data-required="true"></input>
              <span className="error-message">Something is wrong here...</span>
            </div>
            <div className="form-row">
              <input type="password" className="form-control" placeholder="Your Password" data-required="true"></input>
              <span className="error-message">Something is wrong here...</span>
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
});

export default AdminForm;