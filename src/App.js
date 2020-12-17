import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route path=" /login" component={Login}></Route>
        <Route path=" /register" component={Register}></Route> */}
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;