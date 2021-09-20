import React, { Component } from "react";
import { Divider, Segment } from "semantic-ui-react";
import HeaderPane from "./HeaderPane";
import UserPane from "./UserPane";
import WorkDatePen from "./WorkDatePen";

class SidePan extends Component {
  render() {
    return (
      <Segment>
        {/*  */}
        <HeaderPane />
        <Divider />
        {/*  */}
        <UserPane onSignOut={this.props.onSignOut} />
        <Divider />
        {/*  */}
        <WorkDatePen />
      </Segment>
    );
  }
}

export default SidePan;
