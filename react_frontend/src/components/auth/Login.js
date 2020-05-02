import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }

if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData);
// console.log(userData);
  };


render() {

    // const useStyles = {
    //     root: {
    //       minWidth: 375,
    //       margin: 100,
    //       marginTop:50,
    //       marginBottom:50,
    //       borderRadius:20
          
    //     },
    //   };
    // const classes = useStyles();
    const { errors } = this.state;
    
return (
    <div className="container">
    
    <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: 'auto',
                 height: 'auto',
                margin:  25,
                borderRadius: 15
                
            }}
      >
        
    {/* <Card style={useStyles.root}  boxShadow={3}
        bgcolor="background.paper">
      <CardContent> */}
      <div className="container-fluid">
        <div style={{ marginTop: "4rem", marginBottom: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ letterSpacing: "1.5px", float:"left" }}>
              <p className="grey-text text-darken-1"
                style={{
                fontSize: "20px",
                letterSpacing: "1.5px",
                textTransform: "inherit",
                float : "left"
              }}>
                If you'l have account, please login in here !
              </p>
              
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email Address</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1"
              style={{
                letterSpacing: "1.5px",
                textTransform: "inherit",
                float : "left"
              }}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>

                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    textTransform: "inherit",
                    float :"right"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
                <br></br>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </CardContent>
    </Card> */}
      </Box>
    </div>
    );
  }
}
// export default Login;

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);