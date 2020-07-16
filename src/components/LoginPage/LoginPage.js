import React from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';


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
      return <Redirect to={from} />
    }
    return (
      <div>
        <h1>login</h1>
        <GoogleLogin
          clientId="328129129619-hb9ssc9ajkdqrfr82dsmtn27jhkjrqdj.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
          buttonText="Login"
          onSuccess={this.login}
          // isSignedIn={true}
          // onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}
export default Login
