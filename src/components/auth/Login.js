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
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="violet">
            <Icon name="code branch" color="violet"></Icon>
            Login To WorkList
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                type="email"
              ></Form.Input>

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="email"
              ></Form.Input>
              <Button color="violet" fluid size="large">
                {" "}
                Login{" "}
              </Button>
            </Segment>
          </Form>

          <Message error>
            <h3>Error</h3>
            ErrorMessage
          </Message>

          <Message error>
            You dont't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
