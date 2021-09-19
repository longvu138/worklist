import md5 from "md5";
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

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    loading: false,
    errors: [],
    userRef: firebase.database().ref("users"),
  };

  //bắt sự kiện người dùng nhập data vào các input thông qua name
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // xử lý đăng nhập
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      const { errors, username, email, password } = this.state;

      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          console.log(createdUser);

          createdUser.user
            .updateProfile({
              displayName: username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`,
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved");
                this.setState({ loading: false });

                this.props.history.push("/login");
              });
            });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ errors: [...errors, err], loading: false });
        });
    }
  };

  saveUser = (createdUser) => {
    return this.state.userRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };
  isFormValid = () => {
    let errors = [];
    let error;
    const { username, email, password, passwordConfirmation } = this.state;
    if (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    ) {
      error = { message: "Fill in all field" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (
      password.length < 6 ||
      passwordConfirmation.length < 6 ||
      passwordConfirmation !== password
    ) {
      error = { message: "Password is valid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    }

    return true;
  };

  displayErrors = (errors) =>
    errors.map((error, index) => <p key={index}> {error.message}</p>);
  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? " error"
      : "";
  };

  render() {
    const { username, password, email, passwordConfirmation, loading } =
      this.state;
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="orange">
              <Icon name="puzzle" color="orange"></Icon>
              Register For WorkList
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                  type="username"
                  onChange={this.handleChange}
                  className={this.handleInputError(
                    this.state.errors,
                    "username"
                  )}
                ></Form.Input>

                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="email address"
                  type="email"
                  onChange={this.handleChange}
                  className={this.handleInputError(this.state.errors, "email")}
                ></Form.Input>

                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  className={this.handleInputError(
                    this.state.errors,
                    "password"
                  )}
                ></Form.Input>

                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="passwordConfirmation"
                  type="password"
                  onChange={this.handleChange}
                  className={this.handleInputError(
                    this.state.errors,
                    "passwordConfirmation"
                  )}
                ></Form.Input>

                <Button
                  className={loading ? "loading" : ""}
                  color="orange"
                  fluid
                  size="large"
                >
                  {" "}
                  Register{" "}
                </Button>
              </Segment>
            </Form>
            {this.state.errors.length > 0 && (
              <Message error>
                <h3>Error</h3>
                {this.displayErrors(this.state.errors)}
              </Message>
            )}

            <Message error>
              you already have an account? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
