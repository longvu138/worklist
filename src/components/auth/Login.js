import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import firebase from "../../firebase";
import "./Login.css";
class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // khi gọi handleChange từ form, các name input cùng value sẽ đc gán vào state
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      this.setState({ error: [], loading: true });
      const { email, password } = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((singedInUser) => {
          this.setState({ loading: false });
          this.props.history.push("/");
        })
        .catch((err) => {
          this.setState({ loading: false, errors: [err] });
        });
    }
  };

  isFormValid = () => {
    if (!(this.state.email && this.state.password)) {
      // check field email and password is empty
      const error = { message: ".........Email or pasword is empty" };
      this.setState({ errors: [error] });
      return false;
    }

    return true;
  };

  //
  displayErrors = (errors) =>
    errors.map((error, index) => <p key={index}>{error.message.slice(9,70)}</p>);

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? " error"
      : "";
  };

  render() {
    const { loading, email, password, errors } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="violet">
            <Icon name="code branch" color="violet"></Icon>
            Login To WorkList
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={this.handleChange}
                className={this.handleInputError(errors, "email")}
              ></Form.Input>

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={this.handleChange}
                className={this.handleInputError(errors, "password")}
              ></Form.Input>
              <Button
                color="violet"
                fluid
                size="large"
                className={loading ? "loading" : ""}
              >
                {" "}
                Login{" "}
              </Button>
            </Segment>
          </Form>

          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}

          <Message>
            You dont't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
