import React from 'react'
import { connect } from 'react-redux';
import { requestAddUser } from '../../actions'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './LoginPage.css';
import logo from '../../logo.png';
import { FaGoogle } from 'react-icons/fa';


const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    user: state.addUser.user,
    isSucess: state.addUser.isSucess,
    newId: state.addUser.newId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestAddUser: (user) => requestAddUser(user, dispatch)
  }
}

class Login extends React.Component {
  state = {
    isLogin: false,
    user: {}
  }

  login = (response) => {
    var res = response.profileObj;
    this.setState(() => ({
      user: {
        Name: res.name,
        Email: res.email,
        userID: res.googleId
      }
    }))
    sessionStorage.setItem("userData", JSON.stringify(this.state.user));
    this.setState(() => ({
      isLogin: true
    }))
  }

  render() {
    const { isLogin } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isLogin) {
      this.props.onRequestAddUser(this.state.user)
      // from.hash = ""
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
                      Login with <FaGoogle />oogle</Button >
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
