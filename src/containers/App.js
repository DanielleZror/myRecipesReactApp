import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/Dashboard'
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
          <PrivateRoute exact path='/' component={Dashboard} />
        </Router>
      </div>
    );
  }
}


export default App
