import "./App.css";
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SidePan from "./sidepane/SidePan";
import firebase from "../firebase";
import { clearUser, setUser } from "../redux/users/userActions";
import { connect } from "react-redux";
class App extends Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser();
      });
  };

  render() {
    return (
      <Grid stretched stackable style={{ background: "#eee" }}>
        <Grid.Column width="4">
          {/*  */}
          <SidePan  onSignOut={this.handleSignOut} />
        </Grid.Column>
      </Grid>
    );
  }
}



// kết nối tới redux store
const mapStateToProps = ({ users: { loading } }) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});
//
export default connect(mapStateToProps, mapDispatchToProps)(App);
