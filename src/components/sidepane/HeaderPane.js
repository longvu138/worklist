import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class HeaderPane extends Component {
  render() {
    return (
      <Header>
        <Icon name="tasks" />
        <Header.Content>WorkList</Header.Content>
      </Header>
    );
  }
}

export default HeaderPane;
