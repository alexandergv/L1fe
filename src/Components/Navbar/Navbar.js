import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left-side">L1fe</div>
        <div className="right-side">
          <div className="navbar-login">
            <a href="">Login</a>
          </div>
          <div className="navbar-register">
            <a href="">Register</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
