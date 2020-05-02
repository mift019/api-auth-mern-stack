import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper blue">
            <div className="container">
              <Link to="/" style={{ fontSize: 20, fontStyle: "Bold", marginLeft: "10px"}} className="navbar-brand left white-text">
                <b>CodaTech ID</b>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;