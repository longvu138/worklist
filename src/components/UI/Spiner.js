import React, { Component } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

class Spiner extends Component {
  render() {
    return (
      <Dimmer active inverted>
        <Loader size="huge" inverted   content="Loading...."></Loader>
      </Dimmer>
    );
  }
}

export default Spiner;
