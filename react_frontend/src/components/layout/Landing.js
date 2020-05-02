import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s11 left-align">
            <h5 className="grey-text text-darken-1">
              Selamat datang di web apps authentication{" "}
            </h5>
            <br/><br/>
            <div>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "5px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  marginLeft: "10px",
                  width: "140px",
                  borderRadius: "5px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-3">
                Log In
              </Link>
            </div>
            <div>
              
            </div>
            <br/><br/>
            <p className="grey-text text-darken-1">
              Simple web apps user authentication via
              Passport and Json web token, This Web Apps Build with nodeJs, reactJs, mongoDB atlas, and express
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;