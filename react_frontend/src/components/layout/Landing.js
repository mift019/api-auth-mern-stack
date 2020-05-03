import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s11 left-align">
            <p className="grey-text text-darken-1"
            style={{
              fontSize: "30px",
              fontFamily: "Source Sans Pro"
            }}>
              Selamat datang di web apps authentication{" "}
            </p>
            <br/>
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
            <p className="grey-text text-darken-1"
            style={{
              fontSize: "20px",
              fontFamily: "Source Sans Pro"
            }}>
              Simpel web apps authentication menggunakan
              Passport dan Json web token, Web apps ini dikembangkan dengan menggunakan nodeJs, reactJs, mongoDB atlas, express, dan Redux.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;