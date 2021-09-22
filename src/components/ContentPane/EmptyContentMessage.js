import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class EmptyContentMessage extends Component {
  render() {
    return (
      <Message success>
        <Message.Header>
          No Works in the date ' {this.props.workDate} '
        </Message.Header>
      </Message>
    );
  }
}

export default EmptyContentMessage;
