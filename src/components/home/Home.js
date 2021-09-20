import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import {
  Divider,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";

class Home extends Component {
  state = {
    date: "",
  };

  handleWorkDateChange = (event, { name, value }) => {
    console.log(value);
  };

  render() {
    return (
      <Grid stretched stackable style={{ background: "#eee" }}>
        <Grid.Column width="4">
          <Segment>
            <Header>
              <Icon name="tasks" />
              <Header.Content>WorkList</Header.Content>
            </Header>
            <Divider />
            <Menu vertical style={{ width: "100%" }}>
              <Menu.Item name="user">
                <Icon name="user circle"></Icon> User
              </Menu.Item>
              <Menu.Item name="key">
                <Icon name="key"></Icon> Change Password
              </Menu.Item>
              <Menu.Item name="signout">
                <Icon name="sign out alternate" color="pink"></Icon> Sign Out
              </Menu.Item>
            </Menu>
            <Divider />
            <DateInput
              name="date"
              inline
              placeholder="DATE"
              value={this.state.date}
              onChange={this.handleWorkDateChange}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column width="12">
          <Grid>
            <Grid.Column width="16">
              <Grid.Row>
                <Segment clearing>
                  <Header>
                    <Icon name="calendar" />
                    <Header.Content>
                      <h1> Date: 20/09/2021</h1>
                    </Header.Content>
                  </Header>
                  <Button icon="plus" floated="right" />
                </Segment>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid>
                  <Grid.Column width="8">
                    <Segment stacked>
                      <Header>
                        <Icon name="bell" color="red" />
                        <Header.Content>To-Do</Header.Content>
                      </Header>
                      <Divider />
                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column width="8">
                    <Segment stacked>
                      <Header>
                        <Icon name="calendar check outline" color="blue" />
                        <Header.Content>Done</Header.Content>
                      </Header>
                      <Divider />
                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>

                      <Segment attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="mini"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="blue"
                          floated="right"
                          size="mini"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
