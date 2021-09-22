import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Header, Icon, Segment, Button } from "semantic-ui-react";
export class DonePane extends Component {
  render() {
    return (
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
      </Segment>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DonePane);
