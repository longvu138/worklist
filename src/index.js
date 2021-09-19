import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// class này chỉ sử dụng trong index.js
class Root extends Component {
  render() {
    return (
      <>
        <Switch>
          {/* Root hiển thị nội dung App */}
          <Route exact path='/' component={App} ></Route>
          <Route  path='/login' component={Login} ></Route>
          <Route  path='/register' component={Register} ></Route>
        </Switch>
      </>
    )
  }
}


ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
