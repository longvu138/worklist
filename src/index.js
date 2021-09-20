import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import firebase from "./firebase";
import { setUser, clearUser } from "./redux/users/userActions";
import Spiner from "./components/UI/Spiner";

// class này chỉ sử dụng trong index.js
class Root extends Component {
  //kiểm tra đăng nhập
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push("/");
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }

  render() {
    const { loading } = this.props;
    return (
      <>
        {loading ? (
          <Spiner></Spiner>
        ) : (
          <Switch>
            {/* Root hiển thị nội dung App */}
            <Route exact path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        )}
      </>
    );
  }
}

//gửi thông tin đã đăng nhập vào redux
const mapStateToProps = ({ users: { loading } }) => ({
  loading: loading,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});
//
const RootWithAuth = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
