import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/HomePage/homePage'
import Login from '../components/LoginPage/LoginPage';

class App extends React.Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        (sessionStorage.userData)
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/Login',
            state: { from: props.location }
          }} />
      )} />
    )
    return (
      <div >
        <Router>
          <Route path='/Login' component={Login} />
          <PrivateRoute exact path='/' component={Home} />
        </Router>
      </div>
    );
  }
}


export default App
