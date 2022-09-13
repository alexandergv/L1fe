import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left-side">
          <a href="/">L1fe</a>
        </div>
        <div className="right-side">
          <div className="navbar-login">
            <a href="/login">Login</a>
          </div>
          <div className="navbar-register">
            <a href="/register">Register</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
