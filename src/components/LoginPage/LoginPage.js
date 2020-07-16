import React from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './LoginPage.css';
import logo from '../../logo.png';
import { FaGoogle } from 'react-icons/fa';

export class Login extends React.Component {
  state = {
    isLogin: false
  }

  login = (response) => {
    var res = response.profileObj;
    const googleresponse = {
      Name: res.name,
      email: res.email,
      userId: res.googleId
    }
    sessionStorage.setItem("userData", JSON.stringify(googleresponse));
    this.setState(() => ({
      isLogin: true
    }))
  }

  render() {
    const { isLogin } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isLogin) {
      from.hash = ""
      return <Redirect to={from} />
    }
    return (
      <div>
        <Container className="container_login">
          <div className="d-flex justify-content-center">
            <div className="login-card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src={logo} className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="mt-4">
                <GoogleLogin
                  clientId="328129129619-hb9ssc9ajkdqrfr82dsmtn27jhkjrqdj.apps.googleusercontent.com"
                  render={renderProps => (
                    <Button className="login-btn btn-block" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      Login with <FaGoogle/>oogle</Button >
                  )}
                  buttonText="Login"
                  onSuccess={this.login}
                  // isSignedIn={true}
                  // onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                {/* <a id="google-button" class="btn btn-block btn-social btn-google">
                  <i class="fa fa-google"></i> Sign in with Google
						</a> */}
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a
                    href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                    className="ml-2">Sign Up Google</a>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
    )
  }
}
export default Login
