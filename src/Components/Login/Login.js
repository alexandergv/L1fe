import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-text"></div>
        <form className="login-form">
          <input
            className="login-username"
            type="text"
            placeholder="username"
          />
          <input
            type="text"
            placeholder="password"
            className="login-password"
          />
          <input className="login-submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Login;
